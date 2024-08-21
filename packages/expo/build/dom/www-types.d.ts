import type { WebViewProps } from 'react-native-webview';
export type JSONValue = boolean | number | string | null | JSONArray | JSONObject;
export interface JSONArray extends Array<JSONValue> {
}
export interface JSONObject {
    [key: string]: JSONValue | undefined;
}
export type BridgeMessage<TData extends JSONValue> = {
    type: string;
    data: TData;
};
export type MarshalPropValuePrimitiveType = number | string | boolean | null | undefined;
export type MarshalPropValueNativeAction = (...args: any[]) => any;
export type MarshalPropValueType = MarshalPropValuePrimitiveType | MarshalPropValuePrimitiveType[] | Record<string, MarshalPropValuePrimitiveType> | MarshalPropValueNativeAction;
export { WebViewProps };
/**
 * The explicit props for DOM components.
 */
interface DOMComponentProps {
    /**
     * The props passing to WebView.
     */
    dom?: Omit<WebViewProps, 'source'>;
    /**
     * Whether to resize the native WebView size based on the DOM content size.
     * @default false
     */
    autoSize?: boolean;
}
/**
 * The public props for DOM components.
 */
export interface DOMProps extends DOMComponentProps {
    [key: string]: MarshalPropValueType | DOMComponentProps[keyof DOMComponentProps];
}
export type DOMPropsWithSource = DOMProps & {
    source: WebViewProps['source'];
};
//# sourceMappingURL=www-types.d.ts.map