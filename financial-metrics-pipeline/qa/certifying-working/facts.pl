% Generated presentation facts. Do not edit.
% Declare optional predicates so negation-as-failure remains safe when no facts exist.
:- dynamic manual_navigation/1.
:- dynamic audio_exists/2.
:- dynamic audio_tts_reference/2.
:- dynamic audio_absolute_url/2.
:- dynamic audio_versioned/2.
:- dynamic audio_duration_seconds/2.
:- dynamic source_title_missing/1.
:- dynamic approval_scope/1.
:- dynamic requested_scope/1.
:- dynamic style_waiver/2.
% Slide facts are emitted together per slide for readable diffs.
:- dynamic intended_channel_profile/1.
:- dynamic channel_profile_checked/2.
:- dynamic channel_upwork_leak_count/1.
:- dynamic channel_story_evidence_visual_narration_parity/1.
:- discontiguous slide/1.
:- discontiguous slide_index/2.
:- discontiguous slide_role/2.
:- discontiguous slide_eyebrow/2.
:- discontiguous slide_headline/2.
:- discontiguous slide_point_count/2.
:- discontiguous slide_duration_ms/2.
:- discontiguous slide_artifact_type/2.
:- discontiguous slide_alt_summary/2.
:- discontiguous slide_evidence_type/2.
:- discontiguous slide_evidence_source/2.
:- discontiguous slide_audio_reference/2.
:- discontiguous slide_cta_destination/2.
outline_approved(true).
outline_binding_matches(true).
deck_id("trustworthy-financial-calculations").
style_profile("technical-editorial-v1").
contract_status("pre-contract").
slide_count(9).
runtime_seconds(133.032000).
extended_runtime_approved(true).
extended_runtime_approval_complete(true).
narration_mode("audio").
narration_source_type("recorded_mp3").
recorded_audio_required(true).
audio_generation_provider("openai_api").
audio_generation_endpoint("/v1/audio/speech").
audio_generation_model("gpt-4o-mini-tts-2025-12-15").
audio_response_format("mp3").
narration_voice_profile("cedar").
active_channel_profile("base").
prolog_engine("real_swipl").
channel_profile_checked("upwork",true).
channel_upwork_leak_count(0).
channel_story_evidence_visual_narration_parity(true).
approval_scope("assets").
approval_scope("audio").
approval_scope("canonical-spec").
approval_scope("deploy").
approval_scope("html").
approval_scope("pdf").
requested_scope("canonical-spec").
intended_channel_profile("base").
intended_channel_profile("upwork").
start_mode("idle").
audio_autoplay(false).
advance_trigger("audio-ended").
audio_failure_fallback("timed").
silent_auto_advance(true).
uses_scroll_into_view(false).
site_tts_detected(false).
site_audio_ended_listener(false).
site_timed_fallback(true).
site_arrow_navigation(true).
site_css_gradient_detected(false).
site_css_glow_detected(false).
site_css_box_shadow_count(2).
manual_navigation("arrow-left").
manual_navigation("arrow-right").
manual_navigation("next-button").
manual_navigation("previous-button").
slide("slide-01").
slide_index("slide-01",1).
slide_role("slide-01","title").
slide_eyebrow("slide-01","The trust problem").
slide_headline("slide-01","The arithmetic is usually easy. Trusting the inputs and definitions is harder.").
slide_point_count("slide-01",3).
slide_duration_ms("slide-01",14480).
slide_artifact_type("slide-01","compare").
slide_alt_summary("slide-01","Comparison of fragile and controlled calculations.").
slide_evidence_type("slide-01","none").
slide_evidence_source("slide-01","").
slide_audio_reference("slide-01","audio/calculation-example/slide-01.mp3").
narration_audio_stored("slide-01",true).
narration_hash_matches("slide-01",true).
narration_text_complete("slide-01",true).
narration_voice_recorded("slide-01",true).
narration_duration_matches("slide-01",true).
narration_reference_parity("slide-01",true).
narration_timing_buffer_valid("slide-01",true).
slide_cta_destination("slide-01","").
slide("slide-02").
slide_index("slide-02",2).
slide_role("slide-02","proof").
slide_eyebrow("slide-02","Working example").
slide_headline("slide-02","One native Google Sheet makes the whole calculation chain inspectable.").
slide_point_count("slide-02",3).
slide_duration_ms("slide-02",15632).
slide_artifact_type("slide-02","table").
slide_alt_summary("slide-02","Table showing the native Google Sheet calculation structure.").
slide_evidence_type("slide-02","verified").
slide_evidence_source("slide-02","https://docs.google.com/spreadsheets/d/17iLgTFtRTJGNlXX2I28mwz8THpAsdQl23Jeo4F2nE04/edit").
slide_audio_reference("slide-02","audio/calculation-example/slide-02.mp3").
narration_audio_stored("slide-02",true).
narration_hash_matches("slide-02",true).
narration_text_complete("slide-02",true).
narration_voice_recorded("slide-02",true).
narration_duration_matches("slide-02",true).
narration_reference_parity("slide-02",true).
narration_timing_buffer_valid("slide-02",true).
slide_cta_destination("slide-02","").
slide("slide-03").
slide_index("slide-03",3).
slide_role("slide-03","solution").
slide_eyebrow("slide-03","Calculation contract").
slide_headline("slide-03","Define the calculation before automating it.").
slide_point_count("slide-03",3).
slide_duration_ms("slide-03",15056).
slide_artifact_type("slide-03","table").
slide_alt_summary("slide-03","Table defining the transferable calculation contract.").
slide_evidence_type("slide-03","source").
slide_evidence_source("slide-03","revision-outline-calculation-expanded.md").
slide_audio_reference("slide-03","audio/calculation-example/slide-03.mp3").
narration_audio_stored("slide-03",true).
narration_hash_matches("slide-03",true).
narration_text_complete("slide-03",true).
narration_voice_recorded("slide-03",true).
narration_duration_matches("slide-03",true).
narration_reference_parity("slide-03",true).
narration_timing_buffer_valid("slide-03",true).
slide_cta_destination("slide-03","").
slide("slide-04").
slide_index("slide-04",4).
slide_role("slide-04","proof").
slide_eyebrow("slide-04","Historical analysis").
slide_headline("slide-04","One source block supports growth, margin, and basis-point analysis.").
slide_point_count("slide-04",3).
slide_duration_ms("slide-04",16208).
slide_artifact_type("slide-04","table").
slide_alt_summary("slide-04","Table of formula-driven historical growth and margin results.").
slide_evidence_type("slide-04","verified").
slide_evidence_source("slide-04","Netflix Q1 2026 SEC filings and the native Google Sheet").
slide_audio_reference("slide-04","audio/calculation-example/slide-04.mp3").
narration_audio_stored("slide-04",true).
narration_hash_matches("slide-04",true).
narration_text_complete("slide-04",true).
narration_voice_recorded("slide-04",true).
narration_duration_matches("slide-04",true).
narration_reference_parity("slide-04",true).
narration_timing_buffer_valid("slide-04",true).
slide_cta_destination("slide-04","").
slide("slide-05").
slide_index("slide-05",5).
slide_role("slide-05","proof").
slide_eyebrow("slide-05","Decomposed bridge").
slide_headline("slide-05","Revenue change minus expense change reconciles exactly to operating-income change.").
slide_point_count("slide-05",3).
slide_duration_ms("slide-05",13760).
slide_artifact_type("slide-05","table").
slide_alt_summary("slide-05","Table reconciling revenue and expense changes to operating income.").
slide_evidence_type("slide-05","verified").
slide_evidence_source("slide-05","Netflix Q1 2026 SEC filings and the native Google Sheet").
slide_audio_reference("slide-05","audio/calculation-example/slide-05.mp3").
narration_audio_stored("slide-05",true).
narration_hash_matches("slide-05",true).
narration_text_complete("slide-05",true).
narration_voice_recorded("slide-05",true).
narration_duration_matches("slide-05",true).
narration_reference_parity("slide-05",true).
narration_timing_buffer_valid("slide-05",true).
slide_cta_destination("slide-05","").
slide("slide-06").
slide_index("slide-06",6).
slide_role("slide-06","process").
slide_eyebrow("slide-06","Scenario mechanics").
slide_headline("slide-06","Assumptions change the mechanics—not pasted outputs.").
slide_point_count("slide-06",3).
slide_duration_ms("slide-06",16328).
slide_artifact_type("slide-06","table").
slide_alt_summary("slide-06","Table showing illustrative scenario mechanics and boundaries.").
slide_evidence_type("slide-06","illustrative").
slide_evidence_source("slide-06","Native Google Sheet Scenario_Sensitivity tab").
slide_audio_reference("slide-06","audio/calculation-example/slide-06.mp3").
narration_audio_stored("slide-06",true).
narration_hash_matches("slide-06",true).
narration_text_complete("slide-06",true).
narration_voice_recorded("slide-06",true).
narration_duration_matches("slide-06",true).
narration_reference_parity("slide-06",true).
narration_timing_buffer_valid("slide-06",true).
slide_cta_destination("slide-06","").
slide("slide-07").
slide_index("slide-07",7).
slide_role("slide-07","problem").
slide_eyebrow("slide-07","Validation boundary").
slide_headline("slide-07","A result is not verified until checks and source attestation pass.").
slide_point_count("slide-07",3).
slide_duration_ms("slide-07",13664).
slide_artifact_type("slide-07","compare").
slide_alt_summary("slide-07","Comparison of formula checks with separate source attestation.").
slide_evidence_type("slide-07","source").
slide_evidence_source("slide-07","Native Google Sheet Checks and Sources tabs").
slide_audio_reference("slide-07","audio/calculation-example/slide-07.mp3").
narration_audio_stored("slide-07",true).
narration_hash_matches("slide-07",true).
narration_text_complete("slide-07",true).
narration_voice_recorded("slide-07",true).
narration_duration_matches("slide-07",true).
narration_reference_parity("slide-07",true).
narration_timing_buffer_valid("slide-07",true).
slide_cta_destination("slide-07","").
slide("slide-08").
slide_index("slide-08",8).
slide_role("slide-08","differentiator").
slide_eyebrow("slide-08","Governed AI boundary").
slide_headline("slide-08","AI can recover structure. It should not own the math.").
slide_point_count("slide-08",3).
slide_duration_ms("slide-08",13712).
slide_artifact_type("slide-08","compare").
slide_alt_summary("slide-08","Comparison of deterministic parsing with bounded AI recovery.").
slide_evidence_type("slide-08","representative").
slide_evidence_source("slide-08","Bounded PDF recovery evidence recorded in the approved outline").
slide_audio_reference("slide-08","audio/calculation-example/slide-08.mp3").
narration_audio_stored("slide-08",true).
narration_hash_matches("slide-08",true).
narration_text_complete("slide-08",true).
narration_voice_recorded("slide-08",true).
narration_duration_matches("slide-08",true).
narration_reference_parity("slide-08",true).
narration_timing_buffer_valid("slide-08",true).
slide_cta_destination("slide-08","").
slide("slide-09").
slide_index("slide-09",9).
slide_role("slide-09","cta").
slide_eyebrow("slide-09","The transferable offer").
slide_headline("slide-09","The contract transfers; the financial example does not have to.").
slide_point_count("slide-09",3).
slide_duration_ms("slide-09",14192).
slide_artifact_type("slide-09","steps").
slide_alt_summary("slide-09","Four-step scope, model, verify, and automate engagement.").
slide_evidence_type("slide-09","none").
slide_evidence_source("slide-09","").
slide_audio_reference("slide-09","audio/calculation-example/slide-09.mp3").
narration_audio_stored("slide-09",true).
narration_hash_matches("slide-09",true).
narration_text_complete("slide-09",true).
narration_voice_recorded("slide-09",true).
narration_duration_matches("slide-09",true).
narration_reference_parity("slide-09",true).
narration_timing_buffer_valid("slide-09",true).
slide_cta_destination("slide-09","active-channel").
audio_exists("slide-01",true).
audio_tts_reference("slide-01",false).
audio_absolute_url("slide-01",false).
audio_versioned("slide-01",false).
audio_duration_seconds("slide-01",13.680000).
audio_exists("slide-02",true).
audio_tts_reference("slide-02",false).
audio_absolute_url("slide-02",false).
audio_versioned("slide-02",false).
audio_duration_seconds("slide-02",14.832000).
audio_exists("slide-03",true).
audio_tts_reference("slide-03",false).
audio_absolute_url("slide-03",false).
audio_versioned("slide-03",false).
audio_duration_seconds("slide-03",14.256000).
audio_exists("slide-04",true).
audio_tts_reference("slide-04",false).
audio_absolute_url("slide-04",false).
audio_versioned("slide-04",false).
audio_duration_seconds("slide-04",15.408000).
audio_exists("slide-05",true).
audio_tts_reference("slide-05",false).
audio_absolute_url("slide-05",false).
audio_versioned("slide-05",false).
audio_duration_seconds("slide-05",12.960000).
audio_exists("slide-06",true).
audio_tts_reference("slide-06",false).
audio_absolute_url("slide-06",false).
audio_versioned("slide-06",false).
audio_duration_seconds("slide-06",15.528000).
audio_exists("slide-07",true).
audio_tts_reference("slide-07",false).
audio_absolute_url("slide-07",false).
audio_versioned("slide-07",false).
audio_duration_seconds("slide-07",12.864000).
audio_exists("slide-08",true).
audio_tts_reference("slide-08",false).
audio_absolute_url("slide-08",false).
audio_versioned("slide-08",false).
audio_duration_seconds("slide-08",12.912000).
audio_exists("slide-09",true).
audio_tts_reference("slide-09",false).
audio_absolute_url("slide-09",false).
audio_versioned("slide-09",false).
audio_duration_seconds("slide-09",13.392000).
