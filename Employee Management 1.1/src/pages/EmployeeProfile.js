import React, { useState } from 'react';

function EmployeeProfile({ userRole, employeeData }) {
  const [profile, setProfile] = useState(employeeData);
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfile({ ...profile, skills: [...profile.skills, newSkill] });
      setNewSkill(''); // Clear the input after adding the skill
    }
  };

  const handleSave = () => {
    // Simulate saving the data (e.g., send to backend or update state)
    alert('Profile updated successfully!');
    // Further logic can be added to handle saving in a real app
  };

  return (
    <div>
      <h1>Employee Profile</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          disabled={userRole !== 'admin'} // Only admin can edit the name
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={profile.department}
          onChange={handleInputChange}
          disabled={userRole !== 'admin'} // Only admin can edit the department
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={profile.status}
          onChange={handleInputChange}
          disabled={userRole !== 'admin'} // Only admin can change status
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div>
        <label>Skills:</label>
        <ul>
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        {userRole === 'employee' && (
          <div>
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a new skill"
            />
            <button onClick={handleAddSkill}>Add Skill</button>
          </div>
        )}
      </div>
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
}

export default EmployeeProfile;
