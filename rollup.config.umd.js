export default {
    entry: 'dist/src/ng2-spinner.js',
    dest: 'dist/bundles/ng2-spinner.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.ng2-spinner',
    globals: {
        '@angular/core': 'ng.core',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
    }
}