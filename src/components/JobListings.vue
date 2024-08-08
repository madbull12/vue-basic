<script setup>
import { reactive,onMounted } from "vue";
import JobListing from "./JobListing.vue";
import axios from 'axios'

const state = reactive({
  jobs:[],
  isLoading:true
});

onMounted(async()=>{
  try{
    const res = await axios.get("http://localhost:5000/jobs");
    state.jobs = res.data;
  }catch(err) {
    console.log(err)
  } finally {
    state.isLoading=false
  }
})

</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container mr-auto">
      <h2 class="text-3xl font-bold text-green-500 text-center mb-6">
        Browse Jobs
      </h2>
    </div>
  </section>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <JobListing :job="job" v-for="job in state.jobs" :key="job.id" />
  </div>

</template>
