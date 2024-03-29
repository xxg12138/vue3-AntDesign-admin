import { ref, onMounted, watchEffect } from 'vue';

const hook = () => {
  const windowWidth = ref(window.innerWidth);
  const isWindowSmall = ref(windowWidth.value < 600);

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  watchEffect(() => {
    isWindowSmall.value = windowWidth.value < 600;
  });

  return {
    isWindowSmall
  };
};

export default hook;
