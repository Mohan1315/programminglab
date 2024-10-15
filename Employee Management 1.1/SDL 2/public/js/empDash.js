// Get elements
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggle-sidebar');
const toggleSidebarMobile = document.getElementById('toggle-sidebar-mobile');
const notifications = document.getElementById('notifications');
const toggleNotifications = document.getElementById('toggle-notifications');
const profileMenu = document.getElementById('profile-menu');
const toggleProfileMenu = document.getElementById('toggle-profile-menu');
const personalInfoTab = document.getElementById('personal-info-tab');
const qualificationsTab = document.getElementById('qualifications-tab');
const achievementsTab = document.getElementById('achievements-tab');
const skillsTab = document.getElementById('skills-tab');
const documentsTab = document.getElementById('documents-tab');
const leaveRequestsTab = document.getElementById('leave-requests-tab');
const personalInfo = document.getElementById('personal-info');
const qualifications = document.getElementById('qualifications');
const achievements = document.getElementById('achievements');
const skills = document.getElementById('skills');
const documents = document.getElementById('documents');
const leaveRequests = document.getElementById('leave-requests');
const personalInfoForm = document.getElementById('personal-info-form');
const updatePersonalInfo = document.getElementById('update-personal-info');
const addQualification = document.getElementById('add-qualification');
const addAchievement = document.getElementById('add-achievement');
const logout = document.getElementById('logout');

// Add event listeners
toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

toggleSidebarMobile.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

toggleNotifications.addEventListener('click', () => {
    notifications.classList.toggle('hidden');
});

toggleProfileMenu.addEventListener('click', () => {
    profileMenu.classList.toggle('hidden');
});

personalInfoTab.addEventListener('click', () => {
    personalInfo.classList.remove('hidden');
    qualifications.classList.add('hidden');
    achievements.classList.add('hidden');
    skills.classList.add('hidden');
    documents.classList.add('hidden');
    leaveRequests.classList.add('hidden');
});

qualificationsTab.addEventListener('click', () => {
    personalInfo.classList.add('hidden');
    qualifications.classList.remove('hidden');
    achievements.classList.add('hidden');
    skills.classList.add('hidden');
    documents.classList.add('hidden');
    leaveRequests.classList.add('hidden');
});

achievementsTab.addEventListener('click', () => {
    personalInfo.classList.add('hidden');
    qualifications.classList.add('hidden');
    achievements.classList.remove('hidden');
    skills.classList.add('hidden');
    documents.classList.add('hidden');
    leaveRequests.classList.add('hidden');
});

skillsTab.addEventListener('click', () => {
    personalInfo.classList.add('hidden');
    qualifications.classList.add('hidden');
    achievements.classList.add('hidden');
    skills.classList.remove('hidden');
    documents.classList.add('hidden');
    leaveRequests.classList.add('hidden');
});

documentsTab.addEventListener('click', () => {
    personalInfo.classList.add('hidden');
    qualifications.classList.add('hidden');
    achievements.classList.add('hidden');
    skills.classList.add('hidden');
    documents.classList.remove('hidden');
    leaveRequests.classList.add('hidden');
});

leaveRequestsTab.addEventListener('click', () => {
    personalInfo.classList.add('hidden');
    qualifications.classList.add('hidden');
    achievements.classList.add('hidden');
    skills.classList.add('hidden');
    documents.classList.add('hidden');
    leaveRequests.classList.remove('hidden');
});

updatePersonalInfo.addEventListener('click', () => {
    // Update personal info logic
    alert('Personal information updated!');
});

addQualification.addEventListener('click', () => {
    // Add a new qualification logic
    alert('New qualification added!');
});

addAchievement.addEventListener('click', () => {
    // Add a new achievement logic
    alert('New achievement added!');
});

logout.addEventListener('click', () => {
    // Perform the logout action
    fetch('/logout', { method: 'POST' })
        .then(() => {
            window.location.href = '/emp-login'; // Redirect to login page
        });
});

// Function to hide sections by default
function hideSections() {
    personalInfo.classList.remove('hidden');
    qualifications.classList.add('hidden');
    achievements.classList.add('hidden');
    skills.classList.add('hidden');
    documents.classList.add('hidden');
    leaveRequests.classList.add('hidden');
}

// Call the function when the page loads
hideSections();
