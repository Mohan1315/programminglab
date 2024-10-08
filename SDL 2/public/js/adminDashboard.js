function adminDashboard() {
    return {
        isSidebarOpen: true,
        isNotificationsOpen: false,
        isProfileMenuOpen: false,
        currentTab: 'employees',
        employees: [],

        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },

        toggleNotifications() {
            this.isNotificationsOpen = !this.isNotificationsOpen;
        },

        toggleProfileMenu() {
            this.isProfileMenuOpen = !this.isProfileMenuOpen;
        },

        setTab(tab) {
            this.currentTab = tab;
        },

        viewEmployee(employee) {
            // Implement employee view logic
        },

        deleteEmployee(id) {
            // Implement delete logic
        },

        addEmployee(newEmployee) {
            this.employees.push(newEmployee); // Add new employee to the employees array
        },
    };
}