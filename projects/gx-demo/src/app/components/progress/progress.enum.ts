enum ProgressModel {
    linear = 'linear',
    circular = 'circular'
}

interface ProgressIndicator{
    value: number;
    view: boolean;
}

export {
    ProgressModel,
    ProgressIndicator
}
