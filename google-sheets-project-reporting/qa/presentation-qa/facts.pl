% Generated presentation facts. Do not edit.
% Declare optional predicates so negation-as-failure remains safe when no facts exist.
:- dynamic manual_navigation/1.
:- dynamic audio_exists/2.
:- dynamic audio_tts_reference/2.
:- dynamic audio_absolute_url/2.
:- dynamic audio_versioned/2.
:- dynamic audio_duration_seconds/2.
:- dynamic source_title_missing/1.
% Slide facts are emitted together per slide for readable diffs.
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
deck_id("google-sheets-project-reporting").
style_profile("technical-editorial-v1").
contract_status("pre-contract").
slide_count(9).
narration_mode("audio").
narration_source_type("recorded_mp3").
recorded_audio_required(true).
audio_generation_provider("openai_api").
audio_generation_endpoint("/v1/audio/speech").
audio_generation_model("gpt-4o-mini-tts").
audio_response_format("mp3").
start_mode("idle").
audio_autoplay(false).
advance_trigger("audio-ended").
audio_failure_fallback("timed").
silent_auto_advance(true).
uses_scroll_into_view(false).
site_tts_detected(false).
site_audio_ended_listener(true).
site_timed_fallback(true).
site_arrow_navigation(true).
site_css_gradient_detected(true).
site_css_glow_detected(false).
site_css_box_shadow_count(21).
manual_navigation("arrow-left").
manual_navigation("arrow-right").
manual_navigation("next-button").
manual_navigation("previous-button").
slide("slide-01").
slide_index("slide-01",1).
slide_role("slide-01","title").
slide_eyebrow("slide-01","The client outcome").
slide_headline("slide-01","Google Sheets + Apps Script automation for daily priorities, workload planning, and AI stakeholder updates.").
slide_point_count("slide-01",3).
slide_duration_ms("slide-01",17800).
slide_artifact_type("slide-01","").
slide_alt_summary("slide-01","One source, three project-management outcomes").
slide_evidence_type("slide-01","verified").
slide_evidence_source("slide-01","private proof implementation and public-safe browser render").
slide_audio_reference("slide-01","audio/slide-01.mp3").
slide_cta_destination("slide-01","").
slide("slide-02").
slide_index("slide-02",2).
slide_role("slide-02","problem").
slide_eyebrow("slide-02","The reporting problem").
slide_headline("slide-02","The task table may be current while the management view is already stale.").
slide_point_count("slide-02",3).
slide_duration_ms("slide-02",16700).
slide_artifact_type("slide-02","").
slide_alt_summary("slide-02","What changes when reporting becomes a workflow").
slide_evidence_type("slide-02","verified").
slide_evidence_source("slide-02","existing public tracker and implemented report workflows").
slide_audio_reference("slide-02","audio/slide-02.mp3").
slide_cta_destination("slide-02","").
slide("slide-03").
slide_index("slide-03",3).
slide_role("slide-03","proof").
slide_eyebrow("slide-03","The structured foundation").
slide_headline("slide-03","The Google Sheet supplies controlled task facts, calculated timing, and stable task IDs.").
slide_point_count("slide-03",3).
slide_duration_ms("slide-03",19360).
slide_artifact_type("slide-03","").
slide_alt_summary("slide-03","Focused Google Sheets task tracker showing task IDs, projects, workers, priorities, statuses, and calculated timing.").
slide_evidence_type("slide-03","verified").
slide_evidence_source("slide-03","screenshots/task-tracker-focused-v2.png").
slide_audio_reference("slide-03","audio/slide-03.mp3").
slide_cta_destination("slide-03","").
slide("slide-04").
slide_index("slide-04",4).
slide_role("slide-04","process").
slide_eyebrow("slide-04","The automation flow").
slide_headline("slide-04","One Apps Script menu turns report choices into validated, repeatable outputs.").
slide_point_count("slide-04",3).
slide_duration_ms("slide-04",21450).
slide_artifact_type("slide-04","").
slide_alt_summary("slide-04","Bound Apps Script execution path").
slide_evidence_type("slide-04","verified").
slide_evidence_source("slide-04","src/apps-script report workflow implementation").
slide_audio_reference("slide-04","audio/slide-04.mp3").
slide_cta_destination("slide-04","").
slide("slide-05").
slide_index("slide-05",5).
slide_role("slide-05","proof").
slide_eyebrow("slide-05","Daily priorities").
slide_headline("slide-05","Daily review reduces the tracker to the work that needs attention now.").
slide_point_count("slide-05",3).
slide_duration_ms("slide-05",18960).
slide_artifact_type("slide-05","").
slide_alt_summary("slide-05","Daily Actions report pattern").
slide_evidence_type("slide-05","verified").
slide_evidence_source("slide-05","implemented deterministic Daily Actions report").
slide_audio_reference("slide-05","audio/slide-05.mp3").
slide_cta_destination("slide-05","").
slide("slide-06").
slide_index("slide-06",6).
slide_role("slide-06","proof").
slide_eyebrow("slide-06","Workload planning").
slide_headline("slide-06","Workload can be grouped by worker or project without inventing utilization percentages.").
slide_point_count("slide-06",3).
slide_duration_ms("slide-06",17250).
slide_artifact_type("slide-06","").
slide_alt_summary("slide-06","Focused Google Sheets dashboard showing open workload counts by owner.").
slide_evidence_type("slide-06","verified").
slide_evidence_source("slide-06","screenshots/workload-focused-v3.png").
slide_audio_reference("slide-06","audio/slide-06.mp3").
slide_cta_destination("slide-06","").
slide("slide-07").
slide_index("slide-07",7).
slide_role("slide-07","solution").
slide_eyebrow("slide-07","Custom Apps Script dialog").
slide_headline("slide-07","The dialog makes complex reporting choices usable without exposing implementation details.").
slide_point_count("slide-07",3).
slide_duration_ms("slide-07",21360).
slide_artifact_type("slide-07","").
slide_alt_summary("slide-07","Live Apps Script PM Report Builder with Stakeholder update, Project Aurora, and Claude selected.").
slide_evidence_type("slide-07","verified").
slide_evidence_source("slide-07","screenshots/dialog-stakeholder-v1.png").
slide_audio_reference("slide-07","audio/slide-07.mp3").
slide_cta_destination("slide-07","").
slide("slide-08").
slide_index("slide-08",8).
slide_role("slide-08","differentiator").
slide_eyebrow("slide-08","Secure AI-assisted reporting").
slide_headline("slide-08","Gemini, Claude, and OpenAI share one validated output contract—not one shared secret path.").
slide_point_count("slide-08",3).
slide_duration_ms("slide-08",26200).
slide_artifact_type("slide-08","").
slide_alt_summary("slide-08","Muted workflow recording showing the redacted security architecture, Apps Script provider selection, generation, validated Google Doc, and Secret Manager accessor role.").
slide_evidence_type("slide-08","verified").
slide_evidence_source("slide-08","video/workflow-report-proof.webm and redacted security proof").
slide_audio_reference("slide-08","audio/slide-08.mp3").
slide_cta_destination("slide-08","").
slide("slide-09").
slide_index("slide-09",9).
slide_role("slide-09","cta").
slide_eyebrow("slide-09","Client delivery").
slide_headline("slide-09","Bring the Google Sheet your team still turns into reports by hand.").
slide_point_count("slide-09",3).
slide_duration_ms("slide-09",6520).
slide_artifact_type("slide-09","").
slide_alt_summary("slide-09","Smallest useful pilot").
slide_evidence_type("slide-09","none").
slide_evidence_source("slide-09","").
slide_audio_reference("slide-09","audio/slide-09.mp3").
slide_cta_destination("slide-09","upwork").
audio_exists("slide-01",true).
audio_tts_reference("slide-01",false).
audio_absolute_url("slide-01",false).
audio_versioned("slide-01",false).
audio_duration_seconds("slide-01",17.304000).
audio_exists("slide-02",true).
audio_tts_reference("slide-02",false).
audio_absolute_url("slide-02",false).
audio_versioned("slide-02",false).
audio_duration_seconds("slide-02",16.200000).
audio_exists("slide-03",true).
audio_tts_reference("slide-03",false).
audio_absolute_url("slide-03",false).
audio_versioned("slide-03",false).
audio_duration_seconds("slide-03",18.864000).
audio_exists("slide-04",true).
audio_tts_reference("slide-04",false).
audio_absolute_url("slide-04",false).
audio_versioned("slide-04",false).
audio_duration_seconds("slide-04",20.952000).
audio_exists("slide-05",true).
audio_tts_reference("slide-05",false).
audio_absolute_url("slide-05",false).
audio_versioned("slide-05",false).
audio_duration_seconds("slide-05",18.456000).
audio_exists("slide-06",true).
audio_tts_reference("slide-06",false).
audio_absolute_url("slide-06",false).
audio_versioned("slide-06",false).
audio_duration_seconds("slide-06",16.752000).
audio_exists("slide-07",true).
audio_tts_reference("slide-07",false).
audio_absolute_url("slide-07",false).
audio_versioned("slide-07",false).
audio_duration_seconds("slide-07",20.856000).
audio_exists("slide-08",true).
audio_tts_reference("slide-08",false).
audio_absolute_url("slide-08",false).
audio_versioned("slide-08",false).
audio_duration_seconds("slide-08",25.704000).
audio_exists("slide-09",true).
audio_tts_reference("slide-09",false).
audio_absolute_url("slide-09",false).
audio_versioned("slide-09",false).
audio_duration_seconds("slide-09",5.520000).
