export const useScreen = () => useState<'mobile' | 'tablet' | 'desktop'>("screen", () => 'desktop');
