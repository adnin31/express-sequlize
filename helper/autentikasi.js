router.use((req,res, next)=>{
  if(req.session.user.role == 'headmaster' || req.session.user.role == 'teacher' || req.session.user.role == 'academic'){
     next();
  } else {
    res.send('Maaf anda tidak diizinkan mengakses halaman ini');
  }
}
