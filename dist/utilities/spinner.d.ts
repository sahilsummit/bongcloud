declare class MySpinner {
    private static spinner;
    static start(text?: string, time?: number): Promise<void>;
    static success(text?: string): void;
    static error(text?: string): void;
    private static sleep;
}
export default MySpinner;
//# sourceMappingURL=spinner.d.ts.map