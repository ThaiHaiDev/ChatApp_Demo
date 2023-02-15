import React from 'react';

function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
    const ref: any = React.useRef<HTMLDivElement | null>();
    React.useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [dep]);
    return ref;
}

export default useChatScroll;
