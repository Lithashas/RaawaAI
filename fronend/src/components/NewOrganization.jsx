import React, { useState } from 'react';

const NewOrganization = ({ onBack }) => {
  const [name, setName] = useState('');
  const [sector, setSector] = useState('Government');
  const [community, setCommunity] = useState('Global Gen-Z');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const orgData = {
      name,
      sector,
      community,
      description,
    };
    console.log('New organization submitted:', orgData);
    // TODO: send orgData to backend or state management
    alert('Organization added successfully!');
    setName('');
    setSector('Government');
    setCommunity('Global Gen-Z');
    setDescription('');
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 text-sm font-semibold text-slate-300 hover:text-white"
      >
        &larr; Back to dashboard
      </button>
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20">
        <h1 className="text-3xl font-bold text-white mb-3">New Organization</h1>
        <p className="text-slate-400 mb-8">Register your new organization.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Organization Name <span className="text-red-400">*</span></label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Organization Name"
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Sector Category <span className="text-red-400">*</span></label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none"
                required
              >
                <option>Government</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Technology</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Target Community <span className="text-red-400">*</span></label>
              <select
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none"
                required
              >
                <option>Global Gen-Z</option>
                <option>Millennials</option>
                <option>Enterprise Leaders</option>
                <option>Nonprofit Teams</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write about your organization..."
              className="w-full min-h-[150px] rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition"
          >
            Add New Organization
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewOrganization;
