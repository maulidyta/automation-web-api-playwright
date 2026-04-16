import { Struct } from 'superstruct';
declare global {
    namespace PlaywrightTest {
        interface Matchers<R> {
            toHaveSchema(schema: Struct<any, any>): object;
        }
    }
}
/**
 * A collection of additional Playwright matchers.
 */
export declare const playwrightApiMatchers: {
    /**
     * Matcher to validate an object against a `superstruct` schema.
     *
     * @param payload - The API response payload or object to validate.
     * @param schema - The `superstruct` schema used for validation.
     *
     * @returns An object indicating whether the validation passed or failed, along with a message.
     *
     * The return type conforms to Playwright's assertion mechanism, providing
     * the necessary structure for integration.
     *
     * @example
     * ```ts
     * const userSchema = object({
     *   id: 'string',
     *   name: 'string',
     *   age: 'number'
     * });
     *
     * const jsonResponse = await response.json(); // { id: '123', name: 'John Doe', age: 30 };
     *
     * expect(jsonResponse).toHaveSchema(userSchema);
     * ```
     */
    toHaveSchema(payload: object, schema: Struct<any, any>): {
        pass: boolean;
        message: () => string;
    };
};