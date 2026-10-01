import { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import EmptyState from "../components/common/Emptystate";

import FilterBar from "../components/applications/FilterBar";
import ApplicationTable from "../components/applications/ApplicationTable";
import ApplicationForm from "../components/applications/ApplicationForm";

import useApplications from "../hooks/useApplications";

function Applications() {
  const { applications, addApplication, deleteApplication } = useApplications();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredApplications = useMemo(() => {
    return applications.filter((application) => {
      const matchesSearch =
        application.company.toLowerCase().includes(search.toLowerCase()) ||
        application.role.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === "All" || application.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, status]);

  const handleAdd = (application) => {
    addApplication(application);
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto max-w-[1500px] space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            Workspace
          </p>

          <h1 className="mt-1 text-2xl font-semibold">Applications</h1>

          <p className="mt-1 text-sm text-text-muted">
            Manage and track all your job applications.
          </p>
        </div>

        <Button onClick={() => setIsModalOpen(true)}>
          <span className="flex items-center gap-2">
            <Plus size={17} />
            Add application
          </span>
        </Button>
      </div>

      <FilterBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      {filteredApplications.length > 0 ? (
        <ApplicationTable
          applications={filteredApplications}
          onDelete={deleteApplication}
        />
      ) : (
        <div className="glass rounded-2xl">
          <EmptyState
            title="No applications found"
            description="Try changing your search or add a new application."
          />
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add new application"
      >
        <ApplicationForm
          onSubmit={handleAdd}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default Applications;
