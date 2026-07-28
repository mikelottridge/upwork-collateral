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
deck_id("google-sheets-project-reporting").
style_profile("technical-editorial-v1").
contract_status("approved").
slide_count(8).
runtime_seconds(122.816000).
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
slide_eyebrow("slide-01","The recurring-work gap").
slide_headline("slide-01","When the spreadsheet works—but the workflow around it does not").
slide_point_count("slide-01",3).
slide_duration_ms("slide-01",14368).
slide_artifact_type("slide-01","").
slide_alt_summary("slide-01","Comparison of a repeated manual reporting loop with a controlled Sheet workflow.").
slide_evidence_type("slide-01","none").
slide_evidence_source("slide-01","").
slide_audio_reference("slide-01","audio/service-reframe/slide-01.mp3").
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
slide_role("slide-02","problem").
slide_eyebrow("slide-02","Self-built sample proof").
slide_headline("slide-02","A working example I built: one Sheet, three controlled workflows").
slide_point_count("slide-02",3).
slide_duration_ms("slide-02",19816).
slide_artifact_type("slide-02","").
slide_alt_summary("slide-02","Self-built Apps Script report dialog using sample project data with explicit workflow and provider choices.").
slide_evidence_type("slide-02","illustrative").
slide_evidence_source("slide-02","screenshots/dialog-stakeholder-v1.png").
slide_audio_reference("slide-02","audio/service-reframe/slide-02.mp3").
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
slide_eyebrow("slide-03","The transferable pattern").
slide_headline("slide-03","The pattern transfers: structured fields, Apps Script logic, governed AI").
slide_point_count("slide-03",3).
slide_duration_ms("slide-03",16912).
slide_artifact_type("slide-03","").
slide_alt_summary("slide-03","Sample task tracker illustrating controlled fields beneath a transferable three-layer workflow.").
slide_evidence_type("slide-03","illustrative").
slide_evidence_source("slide-03","screenshots/task-tracker-focused-v2.png").
slide_audio_reference("slide-03","audio/service-reframe/slide-03.mp3").
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
slide_role("slide-04","process").
slide_eyebrow("slide-04","How work is scoped").
slide_headline("slide-04","Start with one decision, then map data and acceptance checks").
slide_point_count("slide-04",3).
slide_duration_ms("slide-04",13456).
slide_artifact_type("slide-04","").
slide_alt_summary("slide-04","Three-step engagement process: choose a decision, map its data, and define acceptance checks.").
slide_evidence_type("slide-04","none").
slide_evidence_source("slide-04","").
slide_audio_reference("slide-04","audio/service-reframe/slide-04.mp3").
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
slide_eyebrow("slide-05","Example under scrutiny").
slide_headline("slide-05","Back to the example: useful output without invented precision").
slide_point_count("slide-05",3).
slide_duration_ms("slide-05",16960).
slide_artifact_type("slide-05","").
slide_alt_summary("slide-05","Self-built workload report using supported task counts without an unsupported utilization percentage.").
slide_evidence_type("slide-05","illustrative").
slide_evidence_source("slide-05","screenshots/workload-focused-v3.png and an illustrative table structure").
slide_audio_reference("slide-05","audio/service-reframe/slide-05.mp3").
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
slide_role("slide-06","differentiator").
slide_eyebrow("slide-06","Governed AI boundary").
slide_headline("slide-06","AI drafts language. Deterministic logic owns the numbers.").
slide_point_count("slide-06",3).
slide_duration_ms("slide-06",21016).
slide_artifact_type("slide-06","").
slide_alt_summary("slide-06","Redacted architecture showing selected facts, deterministic metrics, governed AI drafting, and owner-private output.").
slide_evidence_type("slide-06","illustrative").
slide_evidence_source("slide-06","screenshots/security-architecture-redacted-v1.png and video/workflow-report-proof.webm").
slide_audio_reference("slide-06","audio/service-reframe/slide-06.mp3").
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
slide_role("slide-07","offer").
slide_eyebrow("slide-07","The bounded offer").
slide_headline("slide-07","Build the smallest useful system inside tools you already use").
slide_point_count("slide-07",3).
slide_duration_ms("slide-07",13768).
slide_artifact_type("slide-07","").
slide_alt_summary("slide-07","Bounded pilot from one recurring decision through a documented, maintainable handover.").
slide_evidence_type("slide-07","none").
slide_evidence_source("slide-07","").
slide_audio_reference("slide-07","audio/service-reframe/slide-07.mp3").
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
slide_role("slide-08","cta").
slide_eyebrow("slide-08","Next step").
slide_headline("slide-08","Show me the Sheet process you still run by hand").
slide_point_count("slide-08",3).
slide_duration_ms("slide-08",6520).
slide_artifact_type("slide-08","").
slide_alt_summary("slide-08","One low-risk next step: identify a recurring manual Sheet process.").
slide_evidence_type("slide-08","none").
slide_evidence_source("slide-08","").
slide_audio_reference("slide-08","audio/slide-09.mp3").
narration_audio_stored("slide-08",true).
narration_hash_matches("slide-08",true).
narration_text_complete("slide-08",true).
narration_voice_recorded("slide-08",true).
narration_duration_matches("slide-08",true).
narration_reference_parity("slide-08",true).
narration_timing_buffer_valid("slide-08",true).
slide_cta_destination("slide-08","upwork").
audio_exists("slide-01",true).
audio_tts_reference("slide-01",false).
audio_absolute_url("slide-01",false).
audio_versioned("slide-01",false).
audio_duration_seconds("slide-01",13.368000).
audio_exists("slide-02",true).
audio_tts_reference("slide-02",false).
audio_absolute_url("slide-02",false).
audio_versioned("slide-02",false).
audio_duration_seconds("slide-02",18.816000).
audio_exists("slide-03",true).
audio_tts_reference("slide-03",false).
audio_absolute_url("slide-03",false).
audio_versioned("slide-03",false).
audio_duration_seconds("slide-03",15.912000).
audio_exists("slide-04",true).
audio_tts_reference("slide-04",false).
audio_absolute_url("slide-04",false).
audio_versioned("slide-04",false).
audio_duration_seconds("slide-04",12.456000).
audio_exists("slide-05",true).
audio_tts_reference("slide-05",false).
audio_absolute_url("slide-05",false).
audio_versioned("slide-05",false).
audio_duration_seconds("slide-05",15.960000).
audio_exists("slide-06",true).
audio_tts_reference("slide-06",false).
audio_absolute_url("slide-06",false).
audio_versioned("slide-06",false).
audio_duration_seconds("slide-06",20.016000).
audio_exists("slide-07",true).
audio_tts_reference("slide-07",false).
audio_absolute_url("slide-07",false).
audio_versioned("slide-07",false).
audio_duration_seconds("slide-07",12.768000).
audio_exists("slide-08",true).
audio_tts_reference("slide-08",false).
audio_absolute_url("slide-08",false).
audio_versioned("slide-08",false).
audio_duration_seconds("slide-08",5.520000).
