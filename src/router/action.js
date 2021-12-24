import router from './index';

router.beforeEach((to, from, next) => {
  // console.log(to)
  next();
});

//
router.onError((error) => {
  const pattern = /Loading chunk /g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});