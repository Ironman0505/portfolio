const  projects = [
  {
  title: 'Enterprise Service Account Governance & Lifecycle Management Portal',
  description: 'A centralized identity governance platform designed to eliminate orphaned service accounts, enforce accountable ownership mapping, and introduce controlled lifecycle management across enterprise environments.',
  tech: [
    'Node.js',
    'Express.js',
    'SQL Database',
    'REST APIs',
    'Role-Based Access Control (RBAC)',
    'Identity Governance'
  ],
  info: `
Problem Context:
The organization lacked a centralized system to map service accounts to accountable owners. Service accounts were often created without structured ownership records, leading to orphaned accounts when employees left the organization. Additionally, there was no reliable visibility into where service accounts were being used, making decommissioning risky and operationally complex.

This created significant security risks:
• Orphaned privileged accounts with no accountability
• Difficulty in ownership transfer during role changes
• Inability to safely decommission unused service accounts
• Lack of audit trail for service account governance

Objective:
Design and deploy a centralized governance portal to enforce accountable ownership, lifecycle control, and auditability for all enterprise service accounts across regions.

Core Design & Architecture:

Ownership Mapping Framework:
• Each service account must be mapped to a Primary and Secondary Owner.
• Owner confirmation workflow implemented within the portal.
• Accounts without verified ownership cannot remain in active governance state.
• Structured metadata tagging (purpose, domain, environment, business unit).

Approval & Validation Workflow:
• Ownership mapping requires confirmation from designated owners.
• Prevented unauthorized or unilateral ownership assignments.
• Implemented concurrency control to prevent conflicting ownership updates.
• Audit logs maintained for all ownership changes.

Bulk Onboarding & ETL Validation:
• Enabled bulk onboarding of service accounts.
• Implemented validation layer to verify required metadata before database insertion.
• Ensured consistency and eliminated duplicate entries.
• Designed ingestion pipeline for scalable onboarding.

Lifecycle & Decommissioning Controls:
• Introduced structured decommission workflow.
• Decommission request requires confirmation from all mapped owners.
• Account marked for decommission only after explicit validation.
• Maintained historical state tracking for compliance visibility.
• Reduced risk of accidental disruption by enforcing confirmation checks.

Role-Based Access Control:
• Implemented RBAC within the portal to ensure only authorized users can:
  - Modify ownership
  - Initiate decommissioning
  - Approve lifecycle transitions
• Segregation of duties maintained between requestors and approvers.

Technical Highlights:
• Modular Node.js backend with REST APIs.
• SQL schema designed for relational integrity between accounts and owners.
• Locking mechanisms to prevent race conditions during ownership transfers.
• Comprehensive audit logging for governance compliance.
• Designed to scale across global environments.

Impact:
• Centralized governance for 35,000+ service accounts.
• Eliminated orphan account visibility gaps.
• Improved accountability and ownership traceability.
• Reduced risk associated with privileged service accounts.
• Enabled safer and structured decommissioning workflows.

Key Learnings:
• Service accounts require lifecycle governance equivalent to human identities.
• Ownership enforcement must include validation and auditability.
• Concurrency control is critical in governance systems.
• Visibility and structured accountability significantly reduce privileged access risk.
`
},
{
  title: 'DLP Policy Version Control & Configuration Audit Portal',
  description: 'A governance-focused platform built to track, compare, and audit version changes of Microsoft Purview DLP policies, enabling visibility into rule modifications and unauthorized configuration changes.',
  tech: [
    'ReactJS',
    'Node.js',
    'PowerShell',
    'SQL Database',
    'Microsoft Purview',
    'Configuration Diff Engine',
    'Security Governance'
  ],
  info: `
Problem Context:
Microsoft Purview DLP lacked granular version tracking and visibility into policy-level and rule-level configuration changes. The security team could not reliably determine:
• Who modified a policy
• What specific rules were changed
• When the change occurred
• What the previous configuration state was

This created governance blind spots and made it difficult to detect unauthorized or unintended modifications across regional teams.

Objective:
Design and implement an independent version tracking system to monitor Purview DLP policies, maintain historical configuration states, and provide full change visibility for audit and management reporting.

Core Architecture & Workflow:

Policy Extraction Engine:
• Automated scheduled PowerShell scripts to extract DLP policy configurations at fixed intervals (every 6 hours).
• Retrieved full policy definitions including rules, conditions, actions, thresholds, and enforcement modes.
• Normalized configuration data into structured format for comparison.

Versioning & Snapshot Model:
• Stored extracted configurations in a SQL database.
• Implemented version tree structure for each policy.
• Each change creates a new version entry with timestamp and metadata.
• Maintained historical integrity of all previous versions.

Configuration Diff Engine:
• Built a comparison module to detect granular changes between versions.
• Identified:
  - Rule additions
  - Rule deletions
  - Condition modifications
  - Threshold adjustments
  - Enforcement mode changes
• Generated structured change summaries for engineers.

Snapshot Feature:
• Enabled engineers to select any policy and its historical rule version.
• Displayed full configuration snapshot for that specific version.
• Allowed rollback visibility without altering production state.
• Provided precise before-and-after comparison.

Governance & Monitoring Impact:
• Improved visibility into unauthorized or unexpected policy modifications.
• Enabled identification of changes made by cross-regional teams.
• Strengthened management reporting with audit-backed evidence.
• Reduced troubleshooting time for policy-related incidents.
• Increased accountability across distributed security teams.

Technical Highlights:
• Node.js backend handling configuration storage and version logic.
• SQL schema optimized for version lineage tracking.
• Efficient diff logic to detect nested rule changes.
• Modular design separating extraction, storage, and comparison layers.
• Designed as a compensating governance control over vendor limitations.

Impact:
• Provided structured version control for enterprise DLP configurations.
• Reduced ambiguity in policy change investigations.
• Enhanced audit readiness and management transparency.
• Strengthened policy integrity monitoring across environments.

Key Learnings:
• Security configuration drift can introduce governance risks.
• Vendor tooling gaps can be mitigated through independent monitoring layers.
• Version tracking significantly improves accountability in distributed teams.
• Configuration integrity monitoring is critical in data protection systems.
`
},
  {
    title: 'AI Domain Registry & Enforcement Correlation Pipeline',
    description: 'An enterprise-grade automation pipeline designed to proactively identify newly launched AI web applications and correlate them with internal firewall logs to support executive-driven AI access restrictions.',
    tech: [
      'ReactJS',
      'Node.js',
      'SQL Database',
      'REST APIs',
      'SOAR Automation',
      'CrowdStrike SIEM',
      'Palo Alto Firewall'
    ],
    info: `
Problem Context:
The organization mandated blocking access to all AI-based web applications. However, commercial firewall threat intelligence feeds lagged behind rapidly emerging AI tools, allowing employees to access newly launched AI platforms before they were categorized and blocked.

This created a detection gap between AI tool emergence and firewall enforcement.

Objective:
Design a compensating control that continuously discovers newly launched AI domains and correlates them against internal web access logs to ensure timely identification and controlled blocking.

Architecture Overview:
The solution was designed as a dual-phase automation pipeline:

Phase 1 – AI Domain Registry (Proactive Intelligence Layer):
• Built modular Node.js fetchers to ingest AI tool metadata from curated external AI directories and structured data sources.
• Normalized and extracted root domains.
• Stored domains in a SQL-based staging table.
• Implemented manual validation workflow to prevent false positives and ensure governance compliance.
• Approved domains moved to a centralized AI_Domain_Registry table.
• Maintained audit fields: source count, first seen date, review status, and validation timestamp.

Phase 2 – SIEM Log Correlation (Reactive Detection Layer):
• SOAR workflow executes every 2 hours.
• Pulls recent firewall and proxy logs from CrowdStrike SIEM.
• Extracts unique root domains accessed internally.
• Compares domains deterministically against the validated AI_Domain_Registry.
• Generates structured report for firewall team when matches are found.
• Maintains correlation audit logs for traceability.

Governance & Controls:
• No heuristic keyword classification used to avoid misclassification (e.g., generic sites referencing AI).
• Enforcement recommendations are review-based, not blindly automated.
• Exception list and review workflows implemented to prevent overblocking.
• Full auditability of discovered domains and enforcement decisions.

Technical Design Highlights:
• Domain normalization logic to prevent subdomain duplication.
• Deduplication and source-count confidence scoring.
• Modular Node.js architecture separating ingestion, validation, and correlation layers.
• SQL schema optimized for fast domain comparison and historical tracking.
• SOAR orchestration for scheduling and notification delivery.

Impact:
• Reduced detection lag for newly launched AI tools.
• Enabled proactive identification of AI websites not yet categorized by commercial threat feeds.
• Improved visibility into internal AI tool usage trends.
• Provided structured, auditable intelligence to firewall operations team.

Key Learnings:
• External intelligence feeds require governance controls to remain reliable.
• Deterministic registry-based comparison is safer than heuristic domain classification.
• Automation must include validation checkpoints in enterprise environments.
• Rapid SaaS emergence requires adaptive intelligence pipelines beyond static vendor feeds.
`
  }

];



export default projects;