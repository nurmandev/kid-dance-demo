<template>
    <div>
    <Instructors />
    <Freetrial />
    <News />
    </div>
</template>
<script>
import Instructors from '../insinstructors.vue';
import Freetrial from '../freefreetrial.vue';
import News from '../newsnews.vue';

export default {
  name: "List",
  components: {
    Instructors,
    Freetrial,
    News,
  },
};
</script>