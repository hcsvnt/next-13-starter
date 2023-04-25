export interface FlexAttributes {
    display: 'flex';
    flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-evenly' | 'space-between';
    alignItems: 'center' | 'flex-start' | 'flex-end';
}

export function flex(options?: Partial<FlexAttributes>): FlexAttributes {
    const defaults: FlexAttributes = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return { ...defaults, ...options };
}

export interface FullAttributes {
    position: 'absolute';
    inset: string | number;
}

export function full(options?: Partial<FullAttributes>): FullAttributes {
    const defaults: FullAttributes = {
        position: 'absolute',
        inset: 0
    };

    return { ...defaults, ...options };
}
