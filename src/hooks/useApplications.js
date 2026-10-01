import { useEffect, useState } from "react";
import { initialApplications } from "../data/application";

const STORAGE_KEY = "job-tracker-applications";

function useApplications() {
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    return saved ? JSON.parse(saved) : initialApplications;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  const addApplication = (application) => {
    setApplications((prev) => [
      {
        ...application,
        id: Date.now(),
      },
      ...prev,
    ]);
  };

  const deleteApplication = (id) => {
    setApplications((prev) => prev.filter((item) => item.id !== id));
  };

  const updateApplicationStatus = (id, status) => {
    setApplications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
            }
          : item,
      ),
    );
  };

  return {
    applications,
    addApplication,
    deleteApplication,
    updateApplicationStatus,
  };
}

export default useApplications;
