import {
  defineConfig,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";

preset.apple.padding = 0;
preset.maskable.padding = 0;
preset.transparent.padding = 0;

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset,
  images: ["public/logo.svg"],
});
