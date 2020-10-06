const gulp = require('gulp');
const typedoc = require('gulp-typedoc');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('typedoc', function () {
  console.log('执行typeDo任务');
  return gulp.src(['ts/services/*.ts']).pipe(
    typedoc({
      //   exclude: ['node_modules', '**/*+(index|.worker|.e2e).ts'],
      includes: ['*Controller.ts', '*Service.ts'],
      module: 'commonjs',
      target: 'es5',
      includeDeclarations: false,
      out: './doc',
      name: 'shipper-doc',
      ignoreCompilerErrors: false,
      version: true,
    })
  );
});

gulp.task('ts', function () {
  console.log('执行ts--js主任务');
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'));
});

const done = () => console.log('所有任务完成');

gulp.task('default', gulp.series(['ts', 'typedoc', done]));
