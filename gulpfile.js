var gulp=require('gulp');
var sass=require('gulp-sass');
var connect=require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root:'css',
		livereload:true
	});
});
gulp.task('copy-html',function(){
	gulp.src('index.html').pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomi'));
});
gulp.task('copy-css',function(){
	gulp.src('css/index.css').pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomi\\css'));
})
// gulp.task('img',function(){
// 	gulp.src('img/*.jpg').pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomi\\img'))
// })
gulp.task('img',function(){
	gulp.src('img/*.{jpg,png}').pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomi\\img'))
})
gulp.task('sass',function(){
	gulp.src('scss/**/*.scss').pipe(sass()).pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomi\\css'));
});
gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index']);
	gulp.watch('img/**/*.{jpg,png}',['img']);
	gulp.watch('scss/**/*.scss',['sass']);
})

