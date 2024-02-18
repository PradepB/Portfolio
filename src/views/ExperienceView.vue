<template>
    <div class="experience">
        <div class="lg:w-6/12 m-auto w-5/6 pt-10">
            <h2 class="elementor-heading-title elementor-size-default">Professional<br> Experience</h2>
            <accordion v-for='(item, i) of items' :key='i'>
                <template #header>{{ item.heading }}</template>
                <template #year>{{ item.year }}</template>
                <template #location>{{ item.location }}</template>
                <template #url>
                    <a :href="item.url" target="blank">
                        {{ item.url.replace("https://www.", "") }}
                    </a></template>
                <template #body>
                    <p class="content">{{ item.content }}</p>
                </template>

                <template #img>
                    <div class="image-container">
                        <img :src="require(`../assets/${item.img}`)" />
                    </div>
                </template>

                <template #skills>
                    <div class="skills-container">
                        <ul>
                            <li v-for="(skill, i) in item.skills" :key="i">
                                <span> {{ skill }}</span>
                            </li>
                        </ul>
                    </div>
                </template>

            </accordion>
        </div>
    </div>
</template>
<script>
import Accordion from '../components/Accordion'
export default {
    name: 'ExperienceView',
    components: {
        Accordion
    },
    data: () => {
        return {
            items: [
                {
                    heading: "TCS", content: "Engaged in the continuous improvement of our retail online website, I focus on the development of innovative features. This involves collaboration with HUB and GCP components to optimize the platform's functionality and performance.",
                    year: '2021-Present', location: 'Chennai', url: 'https://www.tcs.com',
                    img: "TCS_logo.png",
                    skills: ['JavaScript', 'vue.js', 'Backbone.js', 'Figma', 'Confluence', 'Jira', 'Git', 'GCP', 'Adobe Analytics']
                },
                {
                    heading: "Sify Technologies", content: "Create full-stack applications and craft APIs tailored for Unity, ensuring seamless integration and optimal performance. Develop and maintain database structures, with a focus on MongoDB, to support the application's backend functionality.",
                    year: '2020-2021', location: 'Chennai', url: 'https://www.sify.com',
                    img: "sify_logo.png",
                    skills: ['JavaScript', 'Angular', 'MongoDB', 'Node.js','D3 Charts','HighCharts']
                },
                {
                    heading: "Eparampara Technologies", content: "Design and enhance e-learning applications, ensuring their ongoing functionality. Establish and manage MongoDB database structures while also maintaining existing databases. Collaborate with the Mobile team to streamline API structures and foster effective communication.",
                    year: '2016-2019', location: 'Chennai', url: 'https://www.eparampara.com',
                    img: "eparampara_logo.png",
                    skills: ['JavaScript', 'Angular', 'MongoDB', 'Node.js', 'D3 Charts', 'AWS']
                }
            ]
        }
    },
}
</script>

<style scoped>
.experience {
    background-color: #1a191d;
    min-height: 100vh;
}

.elementor-heading-title {
    font-family: "Poppins", Sans-serif;
    font-size: 62px;
    font-weight: 600;
    line-height: 1.1em;
}

@media (max-width: 425px) {
    .elementor-heading-title {
        font-size: 25px;
    }
}

.elementor-size-default {
    opacity: 1
}

h2 {
    color: white;
    text-align: center;
}

.image-container img {
    max-height: 50px;
    max-width: 200px;
}

@media (max-width: 425px) {
    .image-container img {
        max-height: 25px;
        max-width: 200px;
    }
}

.content {
    margin: 15px;
}

.skills-container li {

    padding: 5px 15px;
    border-radius: 20px;
    background-color: #2c3599;
    font-size: 14px;
    margin-bottom: 6px;
    float: left;
    width: auto;
    list-style: outside none none;
    margin: 7px;

}
</style>
