# Criptana 360 - Development Guide

## Build and Preview Commands
- Serve site locally: `npx serve -l 3000`

## Commit Messages & Review Guidelines
Every commit MUST include a "How to test" section in the body to assist human reviewers:
- Live URL to open and verify the change (e.g. `https://www.criptana360.com/gymkana.html`)
- Step-by-step what to click/check
- Expected result for each step

### Example Commit Message:
```
feat: Strip playable game mechanics from gymkana.html

How to test:
- Open https://www.criptana360.com/gymkana.html
- Check that there are no interactive modals or riddle boxes
- Click on "Comprar Pack en Gumroad" button — it should redirect to Gumroad
- Verify the copy refers to Campo de Criptana, Alcázar, and Consuegra
```
