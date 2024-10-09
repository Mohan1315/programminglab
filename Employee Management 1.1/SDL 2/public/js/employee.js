    function employeeDashboard() {
        return {
            isSidebarOpen: false,
            isNotificationsOpen: false,
            isProfileMenuOpen: false,
            currentTab: 'personal-info',
            personalInfo: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                department: '',
                position: ''
            },
            qualifications: [],
            achievements: [],
            skills: [],

            employeeId: '12345', // Replace this with the actual employee ID

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
                if (tab === 'personal-info') {
                    this.fetchPersonalInfo(); // Fetch personal info when tab is set
                }
            },
            async fetchPersonalInfo() {
                try {
                    const response = await fetch(`/api/employee/${this.employeeId}`); // Adjust the API URL as necessary
                    if (!response.ok) throw new Error('Failed to fetch personal info');
                    const data = await response.json();
                    this.personalInfo = {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        phone: data.phone,
                        address: data.address,
                        department: data.department,
                        position: data.position
                    };
                } catch (error) {
                    console.error('Error fetching personal info:', error);
                }
            },
            async updatePersonalInfo() {
                // Simulate updating personal info (implement your actual update logic here)
                alert('Personal information updated successfully!');
            },
            addQualification() {
                this.qualifications.push({ id: this.qualifications.length + 1, degree: 'Bachelor of Science', institution: 'Tech University', year: '2020' });
            },
            addAchievement() {
                this.achievements.push({ id: this.achievements.length + 1, title: 'Employee of the Month', description: 'Awarded for outstanding performance in September 2024.' });
            },
            addSkill() {
                this.skills.push({ id: this.skills.length + 1, name: 'JavaScript' });
            },
            uploadDocument(event) {
                this.document = event.target.files[0];
            },
            submitDocument() {
                alert('Document uploaded successfully!');
            }
        };
    }

