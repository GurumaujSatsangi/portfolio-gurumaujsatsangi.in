        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary-fixed-dim": "#c6c6c6",
                        "primary-fixed": "#e2e2e2",
                        "inverse-surface": "#303031",
                        "on-error": "#ffffff",
                        "on-surface-variant": "#4c4546",
                        "tertiary-fixed": "#e2e2e2",
                        "surface-container-highest": "#e3e2e2",
                        "inverse-primary": "#c6c6c6",
                        "surface-bright": "#faf9f9",
                        "on-secondary-fixed-variant": "#454747",
                        "error-container": "#ffdad6",
                        "on-secondary-fixed": "#1a1c1c",
                        "on-surface": "#1b1c1c",
                        "outline-variant": "#cfc4c5",
                        "tertiary": "#000000",
                        "surface-tint": "#5e5e5e",
                        "primary": "#000000",
                        "error": "#ba1a1a",
                        "secondary-container": "#dfe0e0",
                        "secondary": "#5d5f5f",
                        "surface-container-high": "#e9e8e8",
                        "on-primary-container": "#848484",
                        "on-secondary-container": "#616363",
                        "on-tertiary-fixed-variant": "#474747",
                        "on-tertiary-fixed": "#1b1b1b",
                        "on-error-container": "#93000a",
                        "on-primary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#c6c6c7",
                        "outline": "#7e7576",
                        "surface-dim": "#dbdad9",
                        "secondary-fixed": "#e2e2e2",
                        "background": "#faf9f9",
                        "primary-fixed-dim": "#c6c6c6",
                        "inverse-on-surface": "#f2f0f0",
                        "on-tertiary": "#ffffff",
                        "on-primary-fixed": "#1b1b1b",
                        "on-tertiary-container": "#848484",
                        "on-background": "#1b1c1c",
                        "surface-container": "#efeded",
                        "surface": "#faf9f9",
                        "tertiary-container": "#1b1b1b",
                        "on-secondary": "#ffffff",
                        "surface-container-low": "#f5f3f3",
                        "on-primary-fixed-variant": "#474747",
                        "primary-container": "#1b1b1b",
                        "surface-variant": "#e3e2e2"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "xl": "40px",
                        "container-max": "1200px",
                        "md": "16px",
                        "unit": "4px",
                        "2xl": "64px",
                        "lg": "24px",
                        "xs": "4px",
                        "sm": "8px"
                    },
                    "fontFamily": {
                        "h3": ["Inter"],
                        "label-caps": ["Inter"],
                        "h2": ["Inter"],
                        "code": ["monospace"],
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "h1": ["Inter"]
                    },
                    "fontSize": {
                        "h3": ["24px", {"lineHeight": "1.3", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.03em", "fontWeight": "700"}],
                        "code": ["13px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "400"}],
                        "body-md": ["14px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}],
                        "h1": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.05em", "fontWeight": "800"}]
                    }
                },
            },
        }


        const carousel = document.getElementById('process-carousel');
    const nextBtn = document.querySelector('button:has(span:contains("chevron_right"))');
    const prevBtn = document.querySelector('button:has(span:contains("chevron_left"))');

    if (carousel) {
        // Overriding the inline onclick slightly to be more robust if needed
        // but simple scrollBy works well for snap containers.
    }