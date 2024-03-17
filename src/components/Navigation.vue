<template>
    <nav>
        <ul class="sidebar">
            <li @click="hideSidebar()"><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="26"
                        viewBox="0 -960 960 960" width="26">
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg></a></li>
            <li><a v-scroll-to="'#experience'" @click="routePages('/experience')">Experience</a></li>
            <li><a v-scroll-to="'#contact'"  @click="routePages('/contact')">Contact</a> </li>

        </ul>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li class="hideOnMobile"><a v-scroll-to="'#experience'">Experience</a></li>
            <li class="hideOnMobile"><a v-scroll-to="'#contact'">Contact</a></li>
            <li class="menubtn" @click="showSidebar()"><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="26"
                        viewBox="0 -960 960 960" width="26">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg></a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavigationComponent',
    data() {
        return {
            isModalVisible: false
        }
    },
    watch: {
        isModalVisible: function () {
            if (this.isModalVisible) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }
            document.documentElement.style.overflow = 'auto';
        }
    },
    methods: {
        showSidebar() {
            this.isModalVisible = true;
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.display = 'flex';
        },
        hideSidebar() {
            this.isModalVisible = false;
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.display = 'none';
        },
        routePages() {
            this.hideSidebar();
            // this.$router.push(page)
        }
    }
}
</script>

<style scoped>
nav {
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);

    top: 0px;
    width: 100%;
    z-index: 99999;
    /* position: fixed; */
}

nav ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-content: center;
}

nav li {
    height: 50px;
}

nav a {
    height: 100%;
    padding: 0 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
}

nav a:hover {
    background-color: #f0f0f0;
}

nav li:first-child {
    margin-right: auto;
}

.sidebar {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 250px;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.sidebar li {
    width: 100%;
}

.sidebar a {
    width: 100%;
}

.menubtn {
    display: none;
}

@media (max-width: 800px) {
    .hideOnMobile {
        display: none;
    }

    .menubtn {
        display: block;
    }
}

@media (max-width: 425px) {
    .sidebar {
        width: 100%;
    }
}
</style>