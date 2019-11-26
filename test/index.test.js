import React, { createRef, Component } from 'react';
import { render } from '@testing-library/react';
import withRouterRef from '../src';

jest.mock('next/router', () => ({
    useRouter: () => ({ foo: 'bar' }),
}));


it('should inject router prop', () => {
    const MyComponent = jest.fn(() => 'Hello');
    const EnhancedMyComponent = withRouterRef(MyComponent);

    render(<EnhancedMyComponent />);

    const props = { router: { foo: 'bar' } };
    const ref = {};

    expect(MyComponent).toHaveBeenCalledWith(props, ref);
});

it('should forward other props prop', () => {
    const MyComponent = jest.fn(() => 'Hello');
    const EnhancedMyComponent = withRouterRef(MyComponent);

    render(<EnhancedMyComponent foo="bar" />);

    const props = { foo: 'bar', router: { foo: 'bar' } };
    const ref = {};

    expect(MyComponent).toHaveBeenCalledWith(props, ref);
});

it('should forward ref', () => {
    class MyComponent extends Component {
        foo = 'bar';

        render() {
            return 'Hello';
        }
    }

    const EnhancedMyComponent = withRouterRef(MyComponent);

    const ref = createRef();

    render(<EnhancedMyComponent ref={ ref } />);

    expect(ref.current).toBeDefined();
    expect(ref.current.foo).toBe('bar');
});

it('should copy static members, including getInitialProps', () => {
    const MyComponent = jest.fn(() => 'Hello');

    MyComponent.getInitialProps = () => ({});

    const EnhancedMyComponent = withRouterRef(MyComponent);

    expect(EnhancedMyComponent.getInitialProps).toBe(MyComponent.getInitialProps);
});
