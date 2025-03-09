import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.test.json'
    },

    coverage: {
      provider: 'v8',
      enabled: true,
      cache: false,
      clean: true,
      cleanOnRerun: true,
      thresholds: {
        100: true,
        perFile: true
      },
      reporter: ['text'],
      exclude: [
        './src/app.ts',
        '**/index.*/**',
        '**/coverage/**',
        '**/dist/**',
        '**/docs/**',
        '**/dev/**',
        '**/node_modules/**',
        '**/__tests__/**',
        '**/[.]**',
        '**/*.d.ts',
        'test?(s)/**',
        'test?(-*).?(c|m)[jt]s?(x)',
        '**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)',
        '**/{vitest,build,eslint,prettier}.config.*',
        '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}'
      ]
    }
  }
});
