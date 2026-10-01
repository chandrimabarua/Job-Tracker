import { useState } from "react";
import Button from "../common/Button";

const initialForm = {
  company: "",
  role: "",
  location: "",
  type: "Full-time",
  status: "Applied",
  appliedDate: new Date().toISOString().split("T")[0],
  salary: "",
  notes: "",
};

function ApplicationForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.company.trim() || !form.role.trim()) return;

    onSubmit(form);
    setForm(initialForm);
  };

  const inputClass =
    "w-full rounded-xl border border-white/5 bg-card-light px-4 py-3 text-sm text-white outline-none transition placeholder:text-text-muted focus:border-primary/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs text-text-muted">Company</label>

          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="e.g. Google"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-xs text-text-muted">
            Job title
          </label>

          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-xs text-text-muted">Location</label>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Remote / City"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-xs text-text-muted">Job type</label>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className={inputClass}
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs text-text-muted">Status</label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className={inputClass}
          >
            <option>Applied</option>
            <option>In Progress</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs text-text-muted">
            Applied date
          </label>

          <input
            type="date"
            name="appliedDate"
            value={form.appliedDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs text-text-muted">
          Salary range
        </label>

        <input
          name="salary"
          value={form.salary}
          onChange={handleChange}
          placeholder="e.g. $80k - $100k"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-2 block text-xs text-text-muted">Notes</label>

        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Add some notes..."
          rows="3"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex justify-end gap-3 pt-3">
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>

        <Button type="submit">Add application</Button>
      </div>
    </form>
  );
}

export default ApplicationForm;
