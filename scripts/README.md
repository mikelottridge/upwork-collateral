# Collateral Scripts

## `openai_tts_batch.py`

Batch-generates narration audio from `audio/slide-*.txt` files using OpenAI's speech API.

### Example

```bash
export OPENAI_API_KEY=...

python3 /home/mike/collateral/scripts/openai_tts_batch.py \
  --project /home/mike/collateral/medical-project \
  --wire-data
```

Repeat for:

```bash
python3 /home/mike/collateral/scripts/openai_tts_batch.py \
  --project /home/mike/collateral/psychologist-project \
  --wire-data
```

### Notes

- This expects one narration file per slide: `audio/slide-01.txt`, `slide-02.txt`, etc.
- Output files are written alongside them as `slide-01.mp3`, `slide-02.mp3`, etc.
- `--wire-data` injects matching `audio` paths into `site/case-study-data.js`.
- Re-run with `--overwrite` if you want to replace existing audio files.
