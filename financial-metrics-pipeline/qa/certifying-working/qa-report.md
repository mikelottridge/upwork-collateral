# Presentation QA Report

**Status:** `pass_with_warnings`
**Certifying:** `true`

Errors: 0 · Warnings: 8 · Info: 3

## Findings

### WARNING — RENDER_004 — `1024x768`

Potential clipped content was detected.

- Evidence: `[{"tag": "SMALL", "id": null, "className": "", "scrollWidth": 315, "clientWidth": 270, "scrollHeight": 12, "clientHeight": 12}, {"tag": "SMALL", "id": null, "className": "", "scrollWidth": 365, "clientWidth": 270, "scrollHeight": 12, "clientHeight": 12}, {"tag": "DIV", "id": null, "className": "aria-status", "scrollWidth": 96, "clientWidth": 1, "scrollHeight": 2034, "clientHeight": 1}]`

### WARNING — RENDER_004 — `1440x1000`

Potential clipped content was detected.

- Evidence: `[{"tag": "SMALL", "id": null, "className": "", "scrollWidth": 315, "clientWidth": 266, "scrollHeight": 12, "clientHeight": 12}, {"tag": "SMALL", "id": null, "className": "", "scrollWidth": 365, "clientWidth": 266, "scrollHeight": 12, "clientHeight": 12}, {"tag": "DIV", "id": null, "className": "aria-status", "scrollWidth": 96, "clientWidth": 1, "scrollHeight": 2034, "clientHeight": 1}]`

### WARNING — RENDER_004 — `390x844`

Potential clipped content was detected.

- Evidence: `[{"tag": "SMALL", "id": null, "className": "", "scrollWidth": 315, "clientWidth": 161, "scrollHeight": 12, "clientHeight": 12}, {"tag": "SMALL", "id": null, "className": "", "scrollWidth": 365, "clientWidth": 161, "scrollHeight": 12, "clientHeight": 12}, {"tag": "DIV", "id": null, "className": "aria-status", "scrollWidth": 96, "clientWidth": 1, "scrollHeight": 2034, "clientHeight": 1}]`

### WARNING — RENDER_004 — `768x1024`

Potential clipped content was detected.

- Evidence: `[{"tag": "DIV", "id": null, "className": "aria-status", "scrollWidth": 96, "clientWidth": 1, "scrollHeight": 2034, "clientHeight": 1}]`

### WARNING — copy.body_long — `slide-08`

Body has 30 words; target is 28 or fewer

- Evidence: `{"code": "copy.body_long", "message": "Body has 30 words; target is 28 or fewer", "slide_id": "slide-08"}`

### WARNING — copy.bullet_long — `slide-06`

Bullet has 11 words; target is 10 or fewer

- Evidence: `{"code": "copy.bullet_long", "message": "Bullet has 11 words; target is 10 or fewer", "slide_id": "slide-06"}`

### WARNING — copy.bullet_long — `slide-08`

Bullet has 12 words; target is 10 or fewer

- Evidence: `{"code": "copy.bullet_long", "message": "Bullet has 12 words; target is 10 or fewer", "slide_id": "slide-08"}`

### WARNING — copy.subhead_long — `slide-06`

Subhead has 21 words; target is 20 or fewer

- Evidence: `{"code": "copy.subhead_long", "message": "Subhead has 21 words; target is 20 or fewer", "slide_id": "slide-06"}`

### INFO — contrast.pass — `deck`

muted_text vs background contrast is 7.04:1

- Evidence: `{"code": "contrast.pass", "message": "muted_text vs background contrast is 7.04:1"}`

### INFO — contrast.pass — `deck`

accent vs background contrast is 5.74:1

- Evidence: `{"code": "contrast.pass", "message": "accent vs background contrast is 5.74:1"}`

### INFO — contrast.pass — `deck`

text vs background contrast is 14.81:1

- Evidence: `{"code": "contrast.pass", "message": "text vs background contrast is 14.81:1"}`
