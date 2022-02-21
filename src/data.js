module.exports = [
  {
    name: "AWS:CF-001",
    cloud: "AWS",
    risk: "High",
    service: "CF",
    description: "Ensure strong Cipher levels in CloudFront distribution",
    category: "Security",
    function: "Cryptography",
    group: "Encryption in Motion",
    messageFail: "Weak Ciphers exists in CloudFront Distribution",
    messagePass: "Strong Ciphers are set levels in CloudFront Distribution",
    pageDetail:
      "Best practice call for using HTTPS and strong Ciphers. This Signature checks for AWS Cloudfront Content Delivery Network distributions are not using insecure SSL protocols (Like. SSLv3) for HTTPS communication between CloudFront edge locations inclluding your origins. best practice calls for minimum TLSv1.0 or later and avoid using the SSLv3 protocol. Most regulations calls for TLS v1.0 and higher, and PCI calls for TLS v1.1 and higher as of June, 2018.",
    RemediationSteps:
      "To configure CloudFront to require HTTPS between CloudFront and your custom origin\n  1. Sign in to the AWS Management Console and open the CloudFront console at https://console.aws.amazon.com/cloudfront/.\n  2. In the top pane of the CloudFront console, choose the ID for the distribution that you want to update.\n  3. On the Origins tab, choose the origin that you want to update, and then choose Edit.\n  Update the following settings:\n  Origin Protocol Policy\n  Change the Origin Protocol Policy for the applicable origins in your distribution:\n  HTTPS Only – CloudFront uses only HTTPS to communicate with your custom origin.\n  Match Viewer – CloudFront communicates with your custom origin using HTTP or HTTPS, depending on the protocol of the viewer request. For example, if you choose Match Viewer for Origin Protocol Policy and the viewer uses HTTPS to request an object from CloudFront, CloudFront also uses HTTPS to forward the request to your origin.\n  Choose Match Viewer only if you specify Redirect HTTP to HTTPS or HTTPS Only for Viewer Protocol Policy.\n  CloudFront caches the object only once even if viewers make requests using both HTTP and HTTPS protocols.\n  Origin SSL Protocols\n  Choose the Origin SSL Protocols for the applicable origins in your distribution. The SSLv3 protocol is less secure, so we recommend that you choose SSLv3 only if your origin doesn't support TLSv1 or later.\n  Note\n  The TLSv1 handshake is both backwards and forwards compatible with SSLv3, but TLSv1.1 and TLSv1.2 are not. In this case, the openssl only sends a SSLv3 handshake.\n  Choose Yes, Edit.\n  Repeat steps 3 through 5 for each additional origin that you want to require HTTPS for between CloudFront and your custom origin.\n  Confirm the following before you use the updated configuration in a production environment:\n  The path pattern in each cache behavior applies only to the requests that you want viewers to use HTTPS for.\n  The cache behaviors are listed in the order that you want CloudFront to evaluate them in. For more information, see Path Pattern.\n  The cache behaviors are routing requests to the origins that you changed the Origin Protocol Policy for.",
  },
  {
    name: "AWS:CF-002",
    cloud: "AWS",
    risk: "Medium",
    service: "CF",
    description: "Ensure CloudFront access logging",
    category: "Security",
    function: "Audit - Log",
    group: "Logging",
    messageFail: "CloudFront access logging is disabled",
    messagePass: "CloudFront access logging is Enabled",
    pageDetail:
      "Ensure that your AWS Cloudfront distributions have the Logging feature enabled in order to track all viewer requests for the content delivered through the Content Delivery Network (CDN).",
    RemediationSteps:
      '"Login to the AWS Management Console.\n\n        Navigate to Cloudfront dashboard at https://console.aws.amazon.com/cloudfront/.\n        \n        On the Distributions page, select the CDN distribution that you want to update.\n        \n        Click the Distribution Settings button from the dashboard top menu to access the configuration page.\n        \n        On the General tab click the Edit button.\n        \n        On the Distribution Settings page, locate the Logging section and perform the following actions:\n        \n        Select On next to Logging to enable the feature.\n        In the Bucket for Logs box, specify the AWS S3 bucket where you want CloudFront to store the log files. If the selected distribution origin is also an S3 bucket, Cloudnosys recommends selecting a different bucket for storing the access logs."',
  },
  {
    name: "AWS:CF-003",
    cloud: "AWS",
    risk: "High",
    service: "CF",
    description: "Ensure CloudFront Viewer Protocol Policy (HTTPS)",
    category: "Security",
    function: "Cryptography",
    group: "Encryption in Motion",
    messageFail: "CloudFront Protocol Policy is not set to HTTPS",
    messagePass: "CloudFront Protocol Policy is set to HTTPS",
    pageDetail:
      "Ensure that the communication between your Amazon CloudFront CDN distribution and its viewers (end users) is encrypted using HTTPS in order to secure the delivery of your web application content. To enable data in transit encryption, you need to configure the web distribution viewer protocol policy to redirect HTTP requests to HTTPS requests or to require the viewers to use only the HTTPS protocol to access your web content available in the CloudFront distribution cache.",
    RemediationSteps:
      '"Sign in to the AWS Management Console.\n\n        02 Navigate to CloudFront dashboard at https://console.aws.amazon.com/cloudfront/.\n        \n        03 In the left navigation panel, click Distributions.\n        \n        04 On CloudFront Distribution page, under the main menu, select Web and Enabled from Viewing dropdown menus to list all active web distributions available within your AWS account.\n        \n        05 Select the web distribution that you want to reconfigure (see Audit section part I to identify the right distribution).\n        \n        06 Click the Distribution Settings button from the dashboard top menu to access the resource configuration page.\n        \n        07 Choose the Behaviors tab and select the distribution default behavior.\n        \n        08 Click the Edit button to access the behavior configuration settings.\n        \n        09 On the Edit Behavior page, under Default Cache Behavior Settings, perform one of the following actions to enforce encryption for your web content:\n        \n        Set the Viewer Protocol Policy configuration attribute to Redirect HTTP to HTTPS so that any HTTP requests are automatically redirected to HTTPS requests. Click Yes, Edit to apply the changes.\n        Set the Viewer Protocol Policy attribute to HTTPS Only so that your application viewers can only access your web content using HTTPS. Choosing this option will drop any HTTP traffic between edge servers and viewers. Click Yes, Edit to apply the configuration changes.\n        10 Repeat steps no. 5 – 9 to reconfigure the viewer protocol policy for other Amazon CloudFront CDN distributions available within your AWS account."',
  },
  {
    name: "AWS:CLT-001",
    cloud: "AWS",
    risk: "Medium",
    service: "CLT",
    description:
      "Ensure Log file integrity validation is enabled for CloudTrail",
    category: "Security",
    function: "Integrity",
    group: "Logging",
    messageFail:
      "CloudTrail log file integrity validation is not enabled or Configured",
    messagePass: "CloudTrail log file integrity validation is enabled",
    pageDetail:
      "To determine whether a log file was modified, deleted, or unchanged after CloudTrail delivered it, you can use CloudTrail log file integrity validation. Validated log files are invaluable in security and forensic investigations. For example, a validated log file enables you to assert positively that the log file itself has not changed, or that particular user credentials performed specific API activity.",
    RemediationSteps:
      "Enabling Validation and Validating Files\n  \n    To enable log file integrity validation, you can use the AWS Management Console, the AWS CLI, or CloudTrail API. \n    \n    AWS Management Console\n    To enable log file integrity validation with the CloudTrail console, choose Yes for the Enable log file validation option when you create or update a trail. By default, this feature is enabled for new trails. For more information, see Creating a Trail with the Console.",
  },
  {
    name: "AWS:CLT-002",
    risk: "Medium",
    cloud: "AWS",
    service: "CLT",
    description: "Ensure CloudTrail Logs are being sent to CloudWatch",
    category: "Security",
    function: "Audit - Log",
    group: "Logging",
    messageFail: "CloudTrail is not being sent to CloudWatch or Configured ",
    messagePass: "CloudTrail is being sent to CloudWatch",
    pageDetail:
      " Best practice calls sending all of CloudTrail logs to CloudWatch Logs for further security analysis. All historic user, API and all AWS resource activities are logged including tracking IP address.  ",
    RemediationSteps:
      "To enable Cloudtrail to send its log to CloudWatch, Please do the following these steps:\n                          1)Sign in to the AWS Management Console and open the CloudTrail console at : https://console.aws.amazon.com/cloudtrail/\n                          2)Choose the trail name. If you choose a trail that applies to all regions, you will be redirected to the region in which the trail was created. You can create a log group or choose an existing log group in the same region as the trail.\n                          3)Now for CloudWatch Logs, choose Configure.\n                          4)Now for New or existing log group, type the log group name , and then choose Continue. For more information, see CloudWatch Log Group and Log Stream Naming for CloudTrail.\n                          5)For the IAM role, choose an existing role or create one. If you create an IAM role, type a role name.\n                          6)Choose Allow to grant CloudTrail permissions to create a CloudWatch Logs log stream and deliver events.",
  },
  {
    name: "AWS:CLT-003",
    cloud: "AWS",
    risk: "High",
    service: "CLT",
    description: "Ensure CloudTrail Logs are not open to Public",
    category: "Security",
    function: "Audit - Log",
    group: "Logging",
    messageFail: " CloudTrail is open to Public",
    messagePass: " CloudTrail is not open to Public",
    pageDetail:
      "We validate if bucket policy or access control list (ACL) is applied correctly to the S3 bucket which prevents public internet access to the CloudTrail logs.",
    RemediationSteps:
      'Perform the following to setup the metric filter, alarm, SNS topic, and subscription:\n     1.Sign in to the AWS Management Console.\n     2.Navigate to CloudTrail dashboard at https://console.aws.amazon.com/cloudtrail/.\n     3.Select Trails from navigation panel.\n     4.Under Name column, select the trail name that you need to examine.\n     5.Check for S3 bucket name.\n     6.Navigate to S3 dashboard at https://console.aws.amazon.com/s3/.\n     7.Select the S3 bucket used by the CloudTrail trail, then click the Properties tab from the right panel.\n     8.In the Properties panel, click the Permissions tab and search for any grantee group with the name "Everyone". The grantee called "Everyone" is the AWS S3 predefined group that grants anonymous access. If this grantee has one or more permissions enabled,, the selected S3 bucket is publicly accessible and rendered as insecure.\n\n\n      ',
  },
  {
    name: "AWS:CLT-004",
    cloud: "AWS",
    risk: "High",
    service: "CLT",
    description: "Ensure CloudTrail Logs are encrypted at rest using KMS CMKs",
    category: "Security",
    function: "Cryptography",
    group: "Logging",
    messageFail: "CloudTrail logs are not encrypted",
    messagePass: "CloudTrail logs are encrypted",
    pageDetail:
      "Analyze all of your CloudTrail logs are configured to for encryption. KMS customer master keys (CMK). CloudTrail should be configured to use KMS.User will have access to log bucket and CMK policy must grant decrypt permissions.",
    RemediationSteps:
      "To encrypt your CloudTrail log files, perform the following steps:\n                    1)Sign in to the AWS Management Console.\n                    2)Navigate to CloudTrail dashboard at https://console.aws.amazon.com/cloudtrail/.\n                    3)In the left navigation panel, select Trails.\n                    4)Under Name column, select the trail name that you need to update.\n                    5)Click the pencil icon:\n                    6)Next to S3 section to edit the trail bucket configuration.\n                    7)Under S3 bucket* click Advanced.\n                    8)Select Yes next to Encrypt log files to encrypt your log files with SSE-KMS using a Customer Master Key (CMK).\n                    9)Select Yes next to Create a new KMS key to create a new CMK and enter a name for it:\n                    10)Otherwise select No to use an existing CMK encryption key available in the region:\n                    11)Click Save to enable SSE-KMS encryption.",
  },
  {
    name: "AWS:CLT-005",
    risk: "Low",
    cloud: "AWS",
    service: "CLT",
    description: "Ensure S3 Bucket Access Logging is enabled for all buckets",
    category: "Security",
    function: "Audit - Log",
    group: "Logging",
    messageFail: "Cloudtrail S3 Bucket Access Logging is not enabled",
    messagePass: "Cloudtrail S3 Bucket Access Logging is enabled",
    pageDetail:
      "Best practice calls for sending your CloudTrail data logs into an S3 bucket for further security analysis. ",
    RemediationSteps:
      "To Fix this Issue, Please do the following steps:\n                    1)Sign in to the AWS Management Console.\n                    2)Navigate to CloudTrail dashboard at https://console.aws.amazon.com/cloudtrail/.\n                    3)In the left navigation panel, select Trails.\n                    4)Under Name column, select the trail name that you need to examine.\n                    5)Under S3 section check for the S3 bucket name\n                    6)Navigate to S3 dashboard at https://console.aws.amazon.com/s3/.\n                    7)Select the S3 bucket used for CloudTrail logging, then click the Properties tab from the right panel:\n                    8)In the Properties panel, click the Logging tab and set up access logging for the selected bucket:\n                    -Select Enabled checkbox to enable the feature.\n                    -In the Target Bucket field enter the name for the bucket that will store the access logs. You can use the selected bucket or create a new S3 bucket for these logs.\n                    -In the Target Prefix field enter a name for the subdirectory where the access logs will be stored – useful to manage your logs.\n                    9)Review the configuration details and click Save:\n                    -AWS will add automatically the necessary grantee (Log Delivery) and its permissions for the S3 bucket.",
  },
  {
    name: "AWS:CLT-006",
    risk: "High",
    cloud: "AWS",
    service: "CLT",
    description:
      "Ensure the S3 bucket CloudTrail logs are not publicly accessible",
    category: "Security",
    function: "Access Control",
    group: "Logging",
    messageFail: "S3 Bucket is open to all Public Access",
    messagePass: "S3 Bucket is not open to all Public Access",
    pageDetail:
      "Normally S3 buckets are not open to the internet, unless there is a specific reason like collecting data from  a web form such as address, tel# etc.  Care should be taken for all open S3 buckets. Also you should never store Personal Identifiable Information in an open S3 Bucket. ",
    RemediationSteps:
      "To fix this issue, Please check if any public access has been granted to an S3 bucket via the bucket's ACL. For that purpose do the following steps:\n                    1)Go to the AWS CloudTrail console: https://console.aws.amazon.com/cloudtrail/home.\n                    2)In the API activity history pane, click Trails.\n                    3)In the Trails pane, note the bucket names in the S3 bucket column.\n                    4)Go to Amazon S3 console at https://console.aws.amazon.com/s3/home.\n                    5)For each bucket noted in step 3, right-click on the bucket and click Properties.\n                    6)In the Properties pane, click the Permissions tab. The tab shows a list of grants, one row per grant, in the bucket ACL. Each row identifies the grantee and the permissions granted. Ensure no rows exists that have the Grantee set to Everyone or the Grantee set to Any Authenticated User.\n                      Note: We recommend that that you do not configure CloudTrail to write into a S3 bucket that resides in a different AWS account.",
  },
  {
    name: "AWS:CLT-007",
    cloud: "AWS",
    risk: "High",
    service: "CLT",
    description: "Ensure CloudTrail is enabled in all regions",
    category: "Security",
    function: "Audit - Log",
    group: "Logging",
    messageFail: "CloudTrail is not enabled in all applicable regions",
    messagePass: "CloudTrail is enabled in all applicable regions",
    pageDetail:
      "AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service. CloudTrail provides a history of AWS API calls for an account, including API calls made via the Management Console, SDKs, command line tools, and higher-level AWS services (such as CloudFormation).\n    Rationale:\n    The AWS API call history produced by CloudTrail enables security analysis, resource change tracking, and compliance auditing. Additionally, ensuring that a multi-regions trail exists will ensure that unexpected activity occurring in otherwise unused regions is detected.\n    Audit:\n    Perform the following to determine if CloudTrail is enabled for all regions:\n    Via the management Console\n    1. Sign in to the AWS Management Console and open the CloudTrail console at https://console.aws.amazon.com/cloudtrail\n    2. Click on Trails on the left navigation pane\n    1. You will be presented with a list of trails across all regions\n    3. Ensure at least one Trail has All specified in the Region column\n    4. Click on a trail via the link in the Name column\n    5. Ensure Logging is set to ON\n    6. Ensure Apply trail to all regions is set to Yes",
    RemediationSteps:
      " To enable CloudTrail in all applicable regions, please do the following steps:\n                          1)Sign in to the AWS Management Console.\n                          2)Navigate to CloudTrail dashboard at https://console.aws.amazon.com/cloudtrail/.\n                          3)In the left navigation panel, select Trails.\n                          4)Under Name column, select the trail name that you need to update.\n                          5)Under the trail name, search for the Apply trail to all regions status and click the pencil icon next to the status current value.\n                          6)Select Yes to enable the feature and click Save:\n                          7)The selected trail is now replicated across all regions.",
  },
  {
    name: "AWS:CWALM-001",
    cloud: "AWS",
    risk: "High",
    service: "CWALM",
    description:
      "Ensure a log metric filter and alarm exist for unauthorized API calls",
    category: "Security",
    function: "Audit - Log",
    group: "Monitoring",
    messageFail:
      "Log metric filter and alarm does not exist for unauthorized API",
    messagePass: "Log metric filter and alarm exist for unauthorized API",
    pageDetail:
      "Ensure there is a CloudWatch alarm created in your AWS account that is triggered each time a configuration change is made at the CloudTrail service level. The alarm must fire when an API call is made to create, update or delete an AWS CloudTrail trail or when the logging process defined by a trail is stopped or started.",
    RemediationSteps:
      '"Perform the following to setup the metric filter, alarm, SNS topic, and subscription:\n  1.Create a metric filter based on filter pattern provided which checks for S3 Bucket Policy\n  changes and the <group> taken from audit step 2.\n  2. Create an SNS topic that the alarm will notify\n  3. Create an SNS subscription to the topic created in step 2\n  4. Create an alarm that is associated with the CloudWatch Logs Metric Filter created in step 1\n  and an SNS topic created in step 2\n  "',
  },
  {
    name: "AWS:CWALM-002",
    cloud: "AWS",
    risk: "high",
    service: "CWALM",
    description:
      "Ensure a log metric filter and alarm exist for Management Console sign-in without MFA",
    category: "Security",
    function: "Audit - Log",
    group: "Monitoring",
    messageFail:
      "Log metric filter and alarm does not exist for Management Console sign-in without MFA",
    messagePass:
      "Log metric filter and alarm does exist for Management Console sign-in without MFA",
    pageDetail:
      "Ensure that detailed CloudWatch metrics are enabled for all APIs created with AWS API Gateway service in order to monitor API stages caching, latency and detected errors at a more granular level and set alarms accordingly.",
    RemediationSteps:
      '"1. Create a metric filter based on filter pattern provided which checks for S3 Bucket Policy\n  changes and the <group> taken from audit step 2.\n  2. Create an SNS topic that the alarm will notify\n  3. Create an SNS subscription to the topic created in step 2\n  4. Create an alarm that is associated with the CloudWatch Logs Metric Filter created in step 1\n  and an SNS topic created in step 2\n  "',
  },
  {
    name: "AWS:CWEVENTS-001",
    cloud: "AWS",
    risk: "High",
    service: "CWEVENTS",
    description:
      "Ensure that Amazon CloudWatch Events service is in use in order to enable you to react selectively and efficiently to system events that describe changes within your AWS resources",
    category: "Security",
    function: "Audit - Log",
    group: "Monitoring",
    messageFail:
      "Cloud Watch events not in use to detect system changes & security vulnerabilities ",
    messagePass:
      "Cloud Watch events are in use to detect system changes & security vulnerabilities ",
    pageDetail:
      "Ensure that Amazon CloudWatch Events service is in use in order to enable you to react selectively and efficiently to system events that describe changes within your AWS resources. Specifically, with CloudWatch Events service you can create rules that match event patterns and take actions in response to those patterns.",
    RemediationSteps:
      "1.\tPlease Sign in to the AWS Management Console.\n  2.\tNavigate to CloudWatch dashboard at https://console.aws.amazon.com/cloudwatch/.\n  3.\tIn the left navigation panel, under Events section, select Rules.\n  4.\tClick Create rule button to start the process.\n  5.\tOn Step 1: Create rule page, perform the following actions:\n  6.\tWithin the Event Source section, select Schedule, choose Fixed rate of and specify the schedule interval (for example, 5 minutes) that will be used to invoke your AWS Lambda function.\n  7.\tIn the Targets section, click Add target button, select Lambda function as target type from the main dropdown list then select your Lambda function from the Function dropdown list.\n  8.\tClick Configure details to continue the setup process.\n  9.\tOn Step 2: Configure rule details page, enter a unique name for the event rule within the Name box then provide a short description for the rule (optional) within the Description box.\n  10.\tMake sure the State checkbox is enabled to activate the rule after creating it, then click Create rule button to create your new AWS CloudWatch Events rule.\n  11.\tRepeat steps no. 4 - 8 to create additional Amazon CloudWatch Events rules within the selected region.\n  12.\tChange the AWS region from the navigation bar and repeat the entire process for other regions.",
  },
  {
    name: "AWS:DDB-001",
    cloud: "AWS",
    risk: "low",
    service: "DDB",
    description:
      "Ensure DynamoDB has Backup and Restore set.  This help in disaster recovery, and prevent data loss.",
    category: "Security, reliability",
    function: "Business Continuity Mngt (BCM)",
    group: "Disaster Recovery",
    messageFail: "DynamoDB does not have any backups",
    messagePass: "DynamoDB has backup and restore set.",
    pageDetail:
      '"Best practice calls for having backups to avoid any data loss or corruption.Fully automated on-demand backup, restore, and point-in-time recovery for data protection and archiving\n  On-demand backup allows you to create full backups of your Amazon DynamoDB table for data archiving, helping you meet your corporate and governmental regulatory requirements. You can back up tables from a few megabytes to hundreds of terabytes of data, with no impact on performance and availability to your production applications. Backups process in seconds regardless of the size of your tables, so you do not have to worry about backup schedules or long-running processes. In addition, all backups are automatically encrypted, cataloged, easily discoverable, and retained until explicitly deleted.\n   Point-in-time recovery (PITR) provides continuous backups of your DynamoDB table data. When enabled, DynamoDB maintains incremental backups of your table for the last 35 days until you explicitly turn it off."',
    RemediationSteps:
      "1. Sign in to AWS Management Console.\n\n  2. Navigate to DynamoDB dashboard at https://console.aws.amazon.com/dynamodb/.\n  \n  3. In the left navigation panel, under Dashboard, click Tables.\n  \n  4. Select the DynamoDB table that you want to reconfigure (see Audit section part I to identify the right resource).\n  \n  5. Select the Backups tab to access the resource details panel.\n  \n  6. On the Backups panel, within Point-in-time Recovery section, click Enable next to the Status configuration attribute value.\n  \n  7. Within Enable Point-in-time Recovery dialog box, click Enable to activate continuous backups for the selected Amazon DynamoDB table. Once continuous backups are enabled, you should be able to see the Earliest restore date and Latest restore date attributes with the appropriate values. \n  \n  8. Repeat steps no. 4 – 7 to enable automatic continuous backups for other AWS DynamoDB tables available within the current region.\n  \n  9. Change the AWS region from the navigation bar and repeat the process for other regions.",
  },
  {
    name: "AWS:DDB-002",
    cloud: "AWS",
    risk: "high",
    service: "DDB",
    description:
      "Ensure that your Amazon DynamoDB tables are using AWS-managed Customer Master Keys (CMKs) instead of AWS-owned CMKs for Server-Side Encryption (SSE)",
    category: "Security, reliability",
    function: "Cryptography",
    group: "Security",
    messageFail: "DynamoDB is not using CMK for Encryption",
    messagePass: "DynamoDB is using CMK for Encryption",
    pageDetail:
      "Organizational policies, industry or government regulations, and internal compliance requirements often require the use of Server-Side Encryption (SSE) using AWS-managed KMS Customer Master Keys (CMKs) to enhance the data security of your Amazon DynamoDB-based applications.",
    RemediationSteps:
      "1. Sign in to AWS Management Console.\n\n  2. Navigate to DynamoDB dashboard at https://console.aws.amazon.com/dynamodb/.\n  \n  3. In the left navigation panel, under Dashboard, click Tables to access the existing DynamoDB tables.\n  \n  4. Select the Amazon DynamoDB table that you want to reconfigure (see Audit section part I to identify the right resource).\n  \n  5. Select the Overview tab to access the resource details panel.\n  \n  6. On the Overview panel, within Table details section, click the Manage Encryption link available next to Encryption Type.\n  \n  7. Inside Manage Encryption dialog box, select KMS to configure Server-Side Encryption (SSE) to use an AWS-managed CMK for data-at-rest encryption. Click Save to apply the changes. Once the changes are applied, the Encryption Type configuration attribute value should change to KMS.\n  \n  8. Repeat steps no. 4 – 7 to configure Server-Side Encryption (SSE) with AWS-managed Customer Master Keys (CMKs) for other Amazon DynamoDB tables available in the current region.\n  \n  9. Change the AWS region from the navigation bar and repeat the process for other regions.",
  },
  {
    name: "AWS:DDB-003",
    cloud: "AWS",
    risk: "high",
    service: "DDB",
    description:
      "Ensure that there are no unused Amazon DynamoDB tables available within your AWS account.",
    category: "Performance",
    function: "Integrity",
    group: "Performance",
    messageFail: "DynamoDB have unsued Tables",
    messagePass: "DynamoDb does not have unsued Tables",
    pageDetail:
      "You are being charged for AWS DynamoDB Read & Write capacity, regardless whether or not you use the provisioned capacity units for your tables.",
    RemediationSteps:
      "1. Login to the AWS Management Console.\n\n  2. Navigate to DynamoDB dashboard at https://console.aws.amazon.com/dynamodb/.\n  \n  3. In the left navigation panel, under Dashboard, click Tables.\n  \n  4. Select the DynamoDB table that you want to remove.\n  \n  5. Click on the Actions dropdown button from the dashboard top menu then select Delete table:\n  \n  6. In the Delete table dialog box, choose whether you want to delete or not any AWS CloudWatch alarms associated with the selected table then click the Delete button to remove the table.\n  \n  7. Repeat steps no. 4 - 6 to delete any unused Amazon DynamoDB tables provisioned within the current region.\n  \n  8. Change the AWS region from the navigation bar and repeat the process for other regions.",
  },
  {
    name: "AWS:EIP-001",
    cloud: "AWS",
    risk: "Medium",
    service: "EC2:ElasticIP",
    description: "Unassociated Elastic IP Addresses",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "Unassociated Elastic IP Addresses are found",
    messagePass: "There are no Unassociated Elastic IP Addresses",
    pageDetail:
      "Amazon Web Services enforce a small hourly charge if an Elastic IP (EIP) address within your account is not associated with a running EC2 instance or an Elastic Network Interface (ENI). Cloudnosys recommends releasing any unassociated EIPs that are no longer needed to reduce your AWS monthly costs.",
    RemediationSteps:
      "1.\tSign in to the AWS Management Console.\n  2.\tNavigate to VPC dashboard at https://console.aws.amazon.com/vpc/.\n  3.\tIn the left navigation panel, under Virtual Private Cloud section, choose Elastic IPs.\n  4.\tSelect Unassociated from the Filter dropdown menu to filter the available EIPs and return the unattached ones.\n  5.\tSelect the unassociated EIP(s) returned, click the Actions dropdown button from the dashboard top menu and select Release Address.\n  6.\tIn the Release Address confirmation box, review the unattached EIP(s) listed and click Yes, Delete button to remove the selected EIP(s) from your AWS account.\n  7.\tChange the AWS region from the navigation bar and repeat steps no. 4 - 6 to remove any unassociated EIPs within the other regions\n  ",
  },
  {
    name: "AWS:EC2-005",
    cloud: "AWS",
    service: "EC2:Instance",
    description: "Ensure there are no unused Security Group",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    risk: "Low",
    messageFail: "Unused Security Groups exists",
    messagePass: "There are no unused Security Groups",
    pageDetail:
      "Best practice calls for removing unused security groups.  Usually when a test/dev/qa is completed and an application is finally functional, some organizations do not go back to narrow their security group rules to only include the necessary network ports, protocols, and IP addresses. This creates a less than optimal security posture.",
    RemediationSteps:
      "To review settings for your IAM\n\t\t\t  1. Open the IAM console at https://console.aws.amazon.com/iam/\n\t\t\t  2. In the navigation pane, choose Groups, then choose a IAM Group Config, select Users.\n\t\t\t  3. In Users, search for IAM users attached to the Groups.\n\t\t\t  4. If there are no IAM users attached, then AWS console will show the following message: “This group does not contain any users”. In conclusion, the selected Group is not used or orphan. Best practice for IAM security is to remove these orphaned Groups",
  },
  {
    name: "AWS:EC2-008",
    cloud: "AWS",
    risk: "Low",
    service: "EC2:Instance",
    description: "Ensure AMI are encrypted",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail: "AMI are not encrypted",
    messagePass: "Ensure AMI are encrypted",
    pageDetail:
      "Best practice calls for Encrypting AMIs to keep them secure and hardened. This is required for most compliance regulations as encrypted to fulfill compliance requirements for data-at-rest encryption. ",
    RemediationSteps:
      " 1- Sign in to the AWS Management Console and go EC2 dashboard \n                      2- In the left navigation panel, under IMAGES section, choose AMIs.\n                      3- Select the image that you want to use.\n                      4- Select the Details tab and copy the EBS snapshot ID available as value for the Block Devices attribute.\n                      5- In the navigation panel, under ELASTIC BLOCK STORE section, choose Snapshots.\n                      6- Select the attributes filter box and click on Snapshot ID from the dropdown list.\n                      7- Paste the ID copied at step no. 4 into the attributes filter box as the Snapshot ID input value and press Enter.",
  },
  {
    name: "AWS:EC2-009",
    cloud: "AWS",
    risk: "Medium",
    service: "EC2:Instance",
    description: "Find AMIs that are open to Public ",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "Found AMIs that are open to public access",
    messagePass: "No AMIs found that are open to Public ",
    pageDetail:
      "Best practice calls for keeping AMIs not public as they can be modified by anyone. ",
    RemediationSteps:
      " To fix this issue and ensure that no AMI’s are open to public, please follow these steps:\n                         1)Sign in to the AWS Management Console.\n                         2)Navigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n                         3)In the left navigation panel, under IMAGES section, choose AMIs.\n                         4)Select the AMI that you want to make private.\n                         5)Select the Permissions tab from the dashboard bottom panel and click the Edit button to update the selected image launch permissions.\n                         6)In the Modify Image Permissions dialog box, select Private then click Save.\n                         7)Repeat steps no. 4 – 6 to restrict public access to the rest of the AMIs available in the current region.\n                         8)Change the AWS region to repeat the entire process for the other regions.",
  },
  {
    name: "AWS:EC2-021",
    cloud: "AWS",
    risk: "Medium",
    service: "EC2:Instance",
    description: "Ensure that default security groups are not in use",
    category: "Security",
    function: "Integrity",
    group: "Performance",
    messageFail: "Default Security groups are in use",
    messagePass: "Default Security groups are not in use",
    pageDetail:
      "Ensure that the EC2 instances provisioned in your AWS account are not associated with default security groups created alongside with your VPCs in order to enforce using custom and unique security groups that exercise the principle of least privilege.",
    RemediationSteps:
      "1.\tSign in to the AWS Management Console.\n  2.\tNavigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n  3.\tIn the navigation panel, under NETWORK & SECURITY section, choose Security Groups.\n  4.\tClick inside the attributes filter box located under the dashboard top menu, choose Group Name from the dropdown list and enter default to return the EC2 default security group.\n  5.\tSelect the default security group returned as result.\n  6.\tTo replace the default security group assigned to your instance(s), create a new custom security group and transfer any existing inbound/outbound rules to it. To create the necessary security group, perform the following actions:\n  7.\tIn the Security group name box, enter a name for your new custom security group. In the Description box, provide a description to reflect the security group usage. From the VPC dropdown list, select the appropriate VPC ID/name. Inside the Inbound tab, review and configure the ingress rules copied automatically from the default security group. Inside the Outbound tab, review and configure the egress rules copied automatically from the default security group. Click Create button to create the custom EC2 security group.\n  8.\tNow that the inbound and outbound rules are transferred to the new security group it is safe to replace the default security group with the custom one within the EC2 instance(s) network configuration. To replace it, perform the following actions:\n  9.\tChange the AWS region from the navigation bar and repeat the process for other regions.\n  ",
  },
  {
    name: "AWS:EC2-022",
    cloud: "AWS",
    risk: "High",
    service: "EC2:Instance",
    description: "EC2 Instance Using IAM Roles",
    category: "Security",
    function: "Access Control",
    group: "Security",
    messageFail: "EC2 instances are not using IAM roles ",
    messagePass: "EC2 instances are using IAM roles ",
    pageDetail:
      "Use IAM Roles/Instance Profiles instead of IAM Access Keys to appropriately grant access permissions to any application that perform AWS API requests running on your EC2 instances. With IAM roles you can avoid sharing long-term credentials and protect your instances against unauthorized access.",
    RemediationSteps:
      "1.        Sign in to the AWS Management Console.\n  2.        Navigate to IAM dashboard at https://console.aws.amazon.com/iam/.\n  3.        In the left navigation panel, choose Roles.\n  4.        On the Roles page, click Create New Role to set up a new IAM role that your instance(s) can assume by performing the following actions:\n  a.        In the Role Name field enter a name for the role. Choose a name that will reflect the purpose of the role (e.g. EC2-Admin-Role) and click Next Step.\n  b.        Choose the AWS Service Roles section and then select the Amazon EC2 option.\n  c.        On the Attach Policy page, select the access policy to attach to the IAM role. This policy defines what actions your application can take and what AWS resources can access. As example, we will use the AmazonEC2FullAccess policy, which provides full access to all AWS EC2 services and resources (EC2, ELB, ASG, etc). You can also create your own custom policy using the AWS Policy Generator: https://awspolicygen.s3.amazonaws.com/policygen.html. Click Next Step to continue.\n  d.        On the Review page, review the role information (name, ARN, etc) and click Create Role to generate the new IAM role.\n  5.        Now it’s time to create an image (AMI) from your running EC2 instance. To instantiate the Amazon Machine Image (AMI), perform the following:\n  a.        Navigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n  b.        In the left navigation panel, under INSTANCES section, choose Instances.\n  c.        Select the EC2 instance that requires roles for AWS API access (see the Audit section to identify any EC2 instances without IAM roles associated).\n  d.        Click the Actions dropdown button from the dashboard top menu, select Image and click Create Image.\n  e.        Inside Create Image dialog box, provide the following information:\n  f.        Enter a name for the new AMI in the Image Name box.\n  g.        In the Image description box, provide a description that reflects the usage of the EC2 instance selected.\n  h.        Leave No reboot option unchecked so the AWS can guarantee the file system integrity for the new image.\n  i.        Click Create Image to submit the request to create the image. Click Close to return to the EC2 dashboard. The AMI creation may take few minutes. Once the process is complete the image status should change from pending to available.\n  6.        Once the AMI is ready, use it to (re)launch the selected EC2 instance and attach the IAM role created earlier. To launch the instance, perform the following actions:\n  a.        In the navigation panel, under INSTANCES section, select Instances.\n  b.        Click the Launch Instance button from the EC2 dashboard top menu to initiate the process.\n  c.        On the Choose an Amazon Machine Image (AMI) page, choose My AMIs tab then select the AMI created at step no. 5.\n  d.        On the Choose an Instance Type page, select the same instance type used then click Next: Configure Instance Details button.\n  e.        On the Configure Instance Details page, select the newly created role from the IAM role dropdown list and configure any other options available on the page based on your running instance requirements. Click Next: Add Storage and go through the next pages until you reach the Configure Security Group page, without changing any configuration.\n  f.        On the Configure Security Groups, choose Select an existing security group and select the existing instance security group. Click the Review and Launch button, review your instance configuration details and click Launch.\n  g.        In the Select an existing key pair or create a new key pair dialog box, select Choose an existing key pair and use the same key pair as the running EC2 instance. Check I acknowledge that I have access to the selected private key file option then click Launch Instances.\n  h.        Click View Instances to return to the Instances page. The new instance will have the same data and configuration (except the new attached role) as the existing (old) EC2 instance.\n  7.        Once you have verified and tested the new instance, you can transfer the Elastic IP (EIP) from the old EC2 instance to the new instance for reference purposes. If the old instance does not have an EIP attached you will have to update the domain DNS record(s) or any other application references to switch to the new instance IP. To transfer the Elastic IP, perform the following actions:\n  a.        In the navigation panel, under NETWORK & SECURITY section, select Elastic IPs.\n  b.        Select the EIP address attached to the old running instance, click the Actions dropdown button then select Disassociate Address.\n  c.        In the Disassociate Address dialog box, review the details then click Yes, Disassociate.\n  d.        Select the same address, disassociated in the previous step, click the Actions dropdown button then select Associate Address.\n  e.        In the Associate Address dialog box, select the new EC2 instance created at step no. 6 from the Instance dropdown list and then click Associate to attach the EIP.\n  8.        Now it’s safe to terminate the old EC2 instance in order to stop incurring charges for it. To shut down the instance, perform the following:\n  a.        In the navigation panel, under INSTANCES section, select Instances.\n  b.        Select the EC2 instance that you want to terminate.\n  c.        Click the Actions dropdown button from the dashboard top menu, select Instance State and click Terminate.\n  d.        In the Terminate Instances confirmation box, review the instance details then click Yes, Terminate.\n  \n   ",
  },
  {
    name: "AWS:EC2RI-001",
    cloud: "AWS",
    risk: "Medium",
    service: "EC2:RI",
    description: "Reserved Instance Lease Expiration In The Next 30 Days",
    category: "Performance, Cost",
    function: "Business Continuity Mngt (BCM)",
    group: "Performance",
    messageFail: "Reserved Instance Lease will Expire in the next 30 Days",
    messagePass: "Reserved Instance Lease will not Expire in the next 30 Days",
    pageDetail:
      "With Reserved Instances (RIs) you can optimize your Amazon EC2 costs based on your expected usage. Since RIs are not renewed automatically, purchasing another reserved EC2 instances before expiration will guarantee their billing at a discounted hourly rate.",
    RemediationSteps:
      "1.\tSign in to the AWS Management Console.\n  2.\tNavigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n  3.\tIn the left navigation panel, under INSTANCES section, choose Reserved Instances.\n  4.\tSelect the EC2 Reserved Instance that you want to renew and note its configuration attributes (i.e. OS platform, instance type, tenancy and offering class).\n  5.\tClick Purchase Reserved Instances button from the dashboard top menu to start the purchasing process.\n  6.\tOn the Purchase Reserved Instances page, specify the following RI offering details:\n  a.\tFrom Platform dropdown menu, select the OS platform (e.g. Linux/UNIX) used by the EC2 Reserved Instance that you want to renew.\n  b.\tFrom Instance Type dropdown list, choose the necessary instance type (e.g. m3.medium).\n  c.\tFrom Tenancy dropdown menu, select the EC2 Reserved Instance tenancy (e.g. default).\n  d.\tFrom Term dropdown menu, select the length of time for the new reservation based on your needs.\n  e.\tFrom Offering Class dropdown menu, choose Standard.\n  f.\tAnd from Payment Option dropdown menu, select the payment type that you want to use for this reservation (e.g. No Upfront).\n  g.\tClick Search to seek for EC2 Reserved Instances that match the provided criteria.\n  h.\tOnce the query results are returned, choose the preferred offering and click Add to Cart.\n  i.\tClick View Cart to view your cart before purchasing the selected RI offering.\n  j.\tReview the shopping cart details then click Purchase to complete your purchase.\n  k.\tOnce the order confirmation message appears, click Close to return to the EC2 dashboard. The RI order processing may take few minutes as the instance status will change to from pending-payment to active.\n  7.\tRepeat steps no. 4 - 6 to renew (repurchase) other EC2 Reserved Instances that are about to expire, available in the current region.\n  8.\tChange the AWS region from the navigation bar and repeat the process for other regions.\n  ",
  },
  {
    name: "AWS:EC2RI-028",
    cloud: "AWS",
    risk: "High",
    service: "EC2:RI",
    description: "EC2 Reserved Instance Payment Pending",
    category: "Performance, Cost",
    function: "Operations ",
    group: "Monitoring",
    messageFail: "EC2 RI purchase is pending",
    messagePass: "EC2 RI purchase is not pending",
    pageDetail:
      "Identify any pending Amazon EC2 Reserved Instance (RI) purchases available within your AWS account. A payment-pending EC2 RI purchase is a reservation purchase that can't be fully processed due to issues with the payment method used by the AWS user, that maintains the 'payment-pending' status long after the initial purchase attempt - not to be confused with the pending state temporarily installed during a successfully processed EC2 RI purchase (i.e. where the reservation status changes from 'payment-pending' to 'active' in a timely manner).",
    RemediationSteps:
      '1. Sign in to the AWS Management Console.\n    2. Navigate to AWS Support Center page at https://console.aws.amazon.com/support/.\n    3. On Support Center page, click the Create case button to open a support case.\n    4. On the Create Case page, perform the following:\n    a. Under Regarding, select Account and Billing Support option.\n    b. Choose Billing from the Service dropdown list to send your request to AWS Billing and Cost Management service.\n    c. Select Reserved Instances from the Category dropdown list.\n    d. Inside the Subject box, enter a subject for your request such as "Retry EC2 Reserved Instance pending payment".\n    e. Within Description textbox, enter a small description for your request so that AWS support can evaluate properly your request.\n    f. Under Contact method, select a preferred contact method that AWS support team can use to respond to your request. If your need is urgent, choose Phone as contact method to request a direct phone call.\n    g. Click Submit to send the payment retry request for your EC2 Reserved Instance(s) to Amazon Web Services. A customer support representative will contact you shortly.  ',
  },
  {
    name: "AWS:EC2RI-029",
    cloud: "AWS",
    risk: "Low",
    service: "EC2:RI",
    description: "EC2 Reserved Instance Recent Purchases",
    category: "Performance, Cost",
    function: "Operations",
    group: "Performance",
    messageFail: "Unwanted RI purchase has been placed",
    messagePass: "No unwanted RI purchase has been placed",
    pageDetail:
      "By checking your EC2 RI purchases on a regular basis you can detect and cancel any unwanted purchases placed within your AWS account and avoid unexpected charges on your AWS bill. ",
    RemediationSteps:
      '1. Sign in to the AWS Management Console.\n    2. Navigate to CloudTrail dashboard at https://console.aws.amazon.com/cloudtrail/.\n    3. In the left navigation panel, select Trails.\n    4. Under Name column, select the trail name that you need to examine, available in the same AWS region with the identified EC2 RI purchases.\n    5. Within Storage location section check the name of the S3 bucket used to store the trail log data.\n    6. Now navigate to S3 dashboard at https://console.aws.amazon.com/s3/.\n    7. Select the S3 bucket used for CloudTrail logging and use the date/time bucket name format (e.g. cloudtrail-logging-bucket/AWSLogs/123456789012/CloudTrail/us-east-1/2017/03/08) to open the right log file for analysis.\n    8. Based on the log file name (i.e. 123456789012_CloudTrail_us-east-1_20170308T1830Z_65ZWtvmCq5cuBxyOZ.json.gz), identify the CloudTrail log file that contains the API activity recorded on the same date as the unwanted EC2 RI purchase request, click the Actions dropdown button from the dashboard top menu and select Open to download and open the log file in your browser.\n    9. Once the right CloudTrail log file is opened, search for the following attributes in order to identify the necessary log record:\n    a. "eventSource":"ec2.amazonaws.com" – for the name of the AWS service used to place the RI purchase request.\n    b. "eventName":"PurchaseReservedInstancesOffering" – for the name of the AWS API action/command used to place the RI purchase request.\n    c. "eventTime":"2017-03-08T18:30:27.352Z" – for the date/time when the EC2 RI purchase request was placed.\n    \n    10. Identify the right CloudTrail log entry (record) based on the attributes listed at the previous step and verify the "userIdentity" attribute value to determine your unwanted EC2 RI purchase request origin and context.\n    \n    11. Repeat steps no. 7 – 10 to verify the request origin and context for other unwanted EC2 Reserved Instance (RI) purchases placed in the selected region.\n    \n    12. Change the AWS region from the navigation bar and repeat the entire process for other regions.',
  },
  {
    name: "AWS:EC2RI-030",
    cloud: "AWS",
    risk: "High",
    service: "EC2:RI",
    description: "Unused EC2 Reserved Instances",
    category: "Performance, Cost",
    function: "Operations",
    group: "Performance",
    messageFail: "Unused EC2 Reserved Instances present",
    messagePass: "Unused EC2 Reserved Instances not present",
    pageDetail:
      "Ensure that all purchased AWS EC2 Reserved Instances (RI) have corresponding instances running within the same account or within any linked AWS accounts available in an AWS Organization. When an AWS EC2 Reserved Instance is not used (i.e. does not have a running corresponding EC2 instance) the investment made is not valorized and you end up paying for a service that you don't use.",
    RemediationSteps:
      "1. Sign in to the AWS Management Console.\n    2. Navigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n    3. In the navigation panel, under INSTANCES section, choose Reserved Instances.\n    4. If this is the first time when you are listing AWS EC2 RIs for sale, click the Actions dropdown button from the dashboard top menu and select Sell Reserved Instances option, otherwise skip to step no. 10.\n    5. Inside Sell Your Reserved Instance dialog box, click Register to initiate the registration wizard.\n    6. On Account Information page, provide a name for the seller in the Business Name box then click Continue.\n    7. On Add Bank Account page, register a U.S. bank account as the deposit of your sales by providing the bank account number, account holder name and the necessary routing number. Once your bank account information is validated, click Continue.\n    8. On the Confirmation page click Continue finish the registration wizard.\n    9. Go back to the navigation panel and under INSTANCES section click Reserved Instances.\n    10. Select the AWS EC2 Reserved Instance that you want to sell (see Audit section part I to identify the right EC2 resource).\n    11. Click the Actions dropdown button from the dashboard top menu and select Sell Reserved Instances.\n    12In the Sell Your Reserved Instance dialog box, perform the following actions:\n    a. Click Get Started to start listing your selected Reserved Instance.\n    b. Within Configure Your Reserved Instance Listing section, set the number of Reserved instances you would like to sell and the upfront price for each one, then click Continue.\n    c. In the Confirm Your Reserved Instance Listing section, review the RI listing details then click List Reserved Instances to list your instances on Amazon EC2 Reserved Instance Marketplace. Click Close to return to the EC2 dashboard.\n    \n    13. Repeat steps no. 10 - 12 to list for sale other unneeded EC2 Reserved Instances, that have been purchased in the current AWS region and account or within any other member (linked) accounts available in your AWS Organization (if you are using one).\n    \n    14Change the AWS region from the navigation bar and repeat the remediation process for other regions.\n  ",
  },
  {
    name: "AWS:EC2RI-031",
    cloud: "AWS",
    risk: "High",
    service: "EC2:RI",
    description: "Reserved Instance Lease Expiration In The Next 7 Days",
    category: "Performance, Cost",
    function: "Business Continuity Mngt (BCM)",
    group: "Performance",
    messageFail: "RI reservation date has expired",
    messagePass: "RI reservation date has not expired ",
    pageDetail:
      "Ensure that your AWS EC2 Reserved Instances are renewed before expiration in order to get a significant discount (up to 75% depending on the commitment term) on the hourly charges. The renewal process consists of purchasing another EC2 Reserved Instance so that Amazon can keep charging you based on the chosen reservation term.",
    RemediationSteps:
      "1. Sign in to the AWS Management Console.\n    2. Navigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n    3. In the left navigation panel, under INSTANCES section, choose Reserved Instances.\n    4. Select the EC2 Reserved Instance that you want to renew and note its configuration attributes (i.e. OS platform, instance type, tenancy and offering class).\n    5. Click Purchase Reserved Instances button from the dashboard top menu to start the purchasing process.\n    6. On the Purchase Reserved Instances page, specify the following RI offering details:\n    a. From Platform dropdown menu, select the OS platform (e.g. Linux/UNIX) used by the EC2 Reserved Instance that you want to renew.\n    b. From Instance Type dropdown list, choose the necessary instance type (e.g. m3.medium).\n    c. From Tenancy dropdown menu, select the EC2 Reserved Instance tenancy (e.g. default).\n    d. From Term dropdown menu, select the length of time for the new reservation based on your needs.\n    e. From Offering Class dropdown menu, choose Standard.\n    f. And from Payment Option dropdown menu, select the payment type that you want to use for this reservation (e.g. No Upfront).\n    g. Click Search to seek for EC2 Reserved Instances that match the provided criteria.\n    h. Once the query results are returned, choose the preferred offering and click Add to Cart.\n    i. Click View Cart to view your cart before purchasing the selected RI offering.\n    j. Review the shopping cart details then click Purchase to complete your purchase.\n    k. Once the order confirmation message appears, click Close to return to the EC2 dashboard. The RI order processing may take few minutes as the instance status will change to from pending-payment to active.\n    \n    7. Repeat steps no. 4 - 6 to renew (repurchase) other EC2 Reserved Instances that are about to expire, available in the current region.\n    \n    8. Change the AWS region from the navigation bar and repeat the process for other regions.",
  },
  {
    name: "AWS:EC2RI-032",
    cloud: "AWS",
    risk: "High",
    service: "EC2:RI",
    description: "EC2 Reserved Instance Payment Failed",
    category: "Performance, Cost",
    function: "Operations ",
    group: "Performance",
    messageFail: "EC2 Reserved Instances (RIs) available",
    messagePass: "EC2 Reserved Instances (RIs) not available",
    pageDetail:
      'Identify any failed Amazon EC2 Reserved Instances (RIs) available within your account. A failed AWS EC2 RI is an unsuccessful reservation that received the "payment-failed" status during the purchase process.',
    RemediationSteps:
      '1. Sign in to the AWS Management Console.\n    2. Navigate to AWS Support Center page at https://console.aws.amazon.com/support/.\n    3. On Support Center page, click Create case to initiate the process.\n    4. On the Create Case page, perform the following:\n    \n    a. Under Regarding, select Account and Billing Support option.\n    b. Choose Billing from the Service dropdown list to send your request to AWS Billing and Cost Management service.\n    c. Select Reserved Instances from the Category dropdown list.\n    d. Inside the Subject box, enter a subject for your request such as "Retry failed EC2 Reserved Instance payment".\n    e. Within Description textbox, enter a small description for your request so that AWS support can evaluate your request accordingly.\n    f. Under Contact method, select a preferred contact method that AWS support team can use to respond to your request. If your need is urgent, choose Phone as contact method to request a direct phone call.\n    g. Click Submit to send the payment retry request for your EC2 Reserved Instance(s) to AWS. A customer support representative will contact you shortly.',
  },
  {
    name: "AWS:NSG-001",
    cloud: "AWS",
    service: "EC2:SecurityGroups",
    risk: "High",
    description:
      "Ensure no security groups allow ingress from 0.0.0.0/0 to port 22 ",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "Security groups allow ingress from 0.0.0.0/0 to port 22",
    messagePass: "No security groups allow ingress from 0.0.0.0/0 to port 22",
    pageDetail:
      "Because a lot of AWS users have the tendency to attach the default security group to their EC2 instances during the launch process, any default security groups configured to allow unrestricted access can increase opportunities for malicious activity such as hacking, denial-of-service attacks or brute-force attacks.",
    RemediationSteps:
      "Perform the following to implement the prescribed state:\n      \n      1. Login to the AWS Management Console at https://console.aws.amazon.com/vpc/home\n      2. In the left pane, click Security Groups\n      3. For each security group, perform the following:\n      1. Select the security group\n      2. Click the Inbound Rules tab\n      3. Identify the rules to be removed\n      4. Click the x in the Remove column\n      5. Click Save\n      ",
  },
  {
    name: "AWS:NSG-002",
    cloud: "AWS",
    risk: "High",
    service: "EC2:SecurityGroups",
    description:
      "Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389  ",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "Security groups allow ingress from 0.0.0.0/0 to port 3389",
    messagePass: "No security groups allow ingress from 0.0.0.0/0 to port 3389",
    pageDetail:
      "Because a lot of AWS users have the tendency to attach the default security group to their EC2 instances during the launch process, any default security groups configured to allow unrestricted access can increase opportunities for malicious activity such as hacking, denial-of-service attacks or brute-force attacks.",
    RemediationSteps:
      "Perform the following to implement the prescribed state:\n      \n      1. Login to the AWS Management Console at https://console.aws.amazon.com/vpc/home\n      2. In the left pane, click Security Groups\n      3. For each security group, perform the following:\n      1. Select the security group\n      2. Click the Inbound Rules tab\n      3. Identify the rules to be removed\n      4. Click the x in the Remove column\n      5. Click Save\n      ",
  },
  {
    name: "AWS:NSG-003",
    risk: "High",
    cloud: "AWS",
    service: "EC2:SecurityGroups",
    description: "Ensure the default VPC security group restricts all traffic",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "Default security group VPC does not  restricts all traffic",
    messagePass: "Default security group VPC restricts all traffic",
    pageDetail:
      '"A VPC comes with a default security group whose initial settings deny all inbound traffic, allow all outbound traffic, and allow all traffic between instances assigned to the security group. If you don\'t specify a security group when you launch an instance, the instance is automatically assigned to this default security group. Security groups provide stateful filtering of ingress/egress network traffic to AWS resources. It is recommended that the default security group restrict all traffic.\n      Rationale:\n      Configuring the default security group to restrict all traffic will encourage least privilege security group development and mindful placement of AWS resource into security groups which will in-turn reduce the exposure of those resources."',
    RemediationSteps:
      '"Perform the following to determine if the account is configured as prescribed:\n      1. Login to the AWS Management Console at https://console.aws.amazon.com/vpc/home\n      2. In the left pane, click Security Groups\n      3. For each security group, perform the following:\n      1. Select the default security group\n      2. Click the Inbound Rules tab\n      3. Ensure no rule exist\n      4. Click the Outbound Rules tab\n      5. Ensure no rules exist\n      \n      Remediation:\n      \n      Perform the following to implement the prescribed state:\n      1. Identify AWS resources that exist within the default security group\n      2. Create a set of least privilege security groups for those resources\n      3. Place the resources in those security groups\n      4. Remove the resources noted in #1 from the default security group"\n      ',
  },
  {
    name: "AWS:NSG-004",
    cloud: "AWS",
    risk: "High",
    service: "EC2:SecurityGroups",
    description: "Unrestricted SMTP Access",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "SMTP access is not restricted",
    messagePass: "SMTP access is restricted",
    pageDetail:
      "TCP port 25 is used by SMTP (Simple Mail Transfer Protocol) servers for electronic mail (email) transmission. Allowing unrestricted SMTP access can increase opportunities for malicious activity such as hacking, spamming, Shellshock attacks and Denial-of-Service (DoS) attacks.",
    RemediationSteps:
      "1. Sign in to the AWS Management Console.\n  \n    2. Navigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n    \n    3. In the navigation panel, under NETWORK & SECURITY section, choose Security Groups.\n    \n    4. Select the appropriate security group (see Audit section to identify the right one(s)).\n    \n    5. Select the Inbound tab from the dashboard bottom panel and click the Edit button.\n    \n    6. In the Edit inbound rules dialog box, change the traffic Source for any inbound rules that allow unrestricted access through TCP port 25 by performing one of the following actions:\n    - Select My IP from the Source dropdown list to allow inbound traffic only from your machine (from your IP address).\n    - Select Custom from the Source dropdown list and enter one of the following options based on your access requirements:\n    \n    a. The static IP/Elastic IP address of the permitted host with the suffix set to /32, e.g. 54.164.53.56/32.\n    b. The IP address range of the permitted hosts in CIDR notation, for example 54.164.53.56/24.\n    c. The name or ID of another security group available in the same AWS region.\n    \n    7. Click Save to apply the changes.\n    \n    8. Repeat steps no. 4 – 7 to update other EC2 security groups that allow unrestricted SMTP access.\n    \n    9. Change the AWS region from the navigation bar and repeat the process for other regions.\n      ",
  },
  {
    name: "AWS:NSG-005",
    cloud: "AWS",
    risk: "High",
    service: "EC2:SecurityGroups",
    description: "Unrestricted MySQL Access",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "MySQL Access is not restircted",
    messagePass: "MySQL Access is restircted",
    pageDetail:
      "If your EC2 security groups allow unrestricted MySQL access, it can increase opportunities for malicious activity such as hacking, denial-of-service (DoS) attacks and loss of data. In order to implement the principle of least privilege and reduce the possibility of a breach restrict access to only those IP addresses that require it.",
    RemediationSteps:
      "1. Sign in to the AWS Management Console.\n  \n    2. Navigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n    \n    3. In the navigation panel, under NETWORK & SECURITY section, choose Security Groups.\n    \n    4. Select the appropriate security group (see Audit section to identify the right one(s)).\n    \n    5. Select the Inbound tab from the dashboard bottom panel and click the Edit button.\n    \n    6. In the Edit inbound rules dialog box, change the traffic Source for any inbound rules that allow unrestricted access through TCP port 3306 by performing one of the following actions:\n    \n    - Select My IP from the Source dropdown list to allow inbound traffic only from your machine (from your IP address).\n    - Select Custom from the Source dropdown list and enter one of the following options based on your access requirements:\n    \n    a. The static IP/Elastic IP address of the permitted host with the suffix set to /32, e.g. 54.164.53.205/32.\n    b. The static IP/Elastic IP address of the permitted host with the suffix set to /32, e.g. 54.164.53.205/32.\n    c. The IP address range of the permitted hosts in CIDR notation, for example 54.164.53.205/24.\n    d. The name or ID of another security group available in the same AWS region.\n    \n    7. Click Save to apply the changes.\n    \n    8. Repeat steps no. 4 – 7 to update other EC2 security groups that allow unrestricted MySQL access.\n    \n    9. Change the AWS region from the navigation bar and repeat the process for other regions.\n      ",
  },
  {
    name: "AWS:NSG-006",
    cloud: "AWS",
    risk: "High",
    service: "EC2:SecurityGroups",
    description: "Unrestricted FTP Access",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "FTP Access is not restricted",
    messagePass: "FTP Access is restricted ",
    pageDetail:
      "Determine if your EC2 security groups allow unrestricted FTP access because it being unrestricted leads to opportunities for malicious activity such as brute-force attacks, FTP bounce attacks, spoofing attacks and packet capture. TCP ports 20 and 21 are used for data transfer and communication by the File Transfer Protocol (FTP) client-server applications so restrict its access to only those IP addresses that must require it. ",
    RemediationSteps:
      '"1. Sign in to the AWS Management Console.\n  \n    2. Navigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n    \n    3. In the navigation panel, under NETWORK & SECURITY section, choose Security Groups.\n    \n    4. Select the appropriate security group (see Audit section to identify the right one(s)).\n    \n    5. Select the Inbound tab from the dashboard bottom panel and click the Edit button.\n    \n    6. In the Edit inbound rules dialog box, change the traffic Source for any inbound rules that allow unrestricted access through TCP ports 20 and 21 by performing one of the following actions:\n    \n    - Select My IP from the Source dropdown list to allow inbound traffic only from your machine (from your IP address).\n    - Select Custom from the Source dropdown list and enter one of the following options based on your access requirements:\n    \n    a. The static IP/Elastic IP address of the permitted host with the suffix set to /32, e.g. 54.164.53.214/32.\n    b. The IP address range of the permitted hosts in CIDR notation, for example 54.164.53.214/24.\n    c. The name or ID of another security group available in the same AWS region.\n    \n    7. Click Save to apply the changes.\n    \n    8. Repeat steps no. 4 – 7 to update other EC2 security groups that allow unrestricted FTP access.\n    \n    9. Change the AWS region from the navigation bar and repeat the process for other regions."\n      ',
  },
  {
    name: "AWS:EBS-001",
    cloud: "AWS",
    service: "EC2:Volume",
    risk: "High",
    description: "Ensure EBS volume encryption is enabled",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail: "EBS volume encryption is not enabled or configured",
    messagePass: "EBS volume encryption is enabled",
    pageDetail:
      "For all PII and compliance specific regulation Volumes must be encrypted. Encryption of sensitive data is generally a good security practice, and AWS provides the ability to encrypt EBS volumes and their snapshots with AES-256. The encryption occurs on the servers that host the EC2 instances, providing encryption of data as it moves between EC2 instances and EBS storage.",
    RemediationSteps:
      "Encryption for a new EBS Volume\n      1. From within the AWS Management Console, select EC2\n      2. Under ‘Elastic Block Store’ select ‘Volumes’\n      3. Select ‘Create Volume’\n      4. Enter the required configuration for your Volume\n      5. Select the checkbox for ‘Encrypt this volume’\n      6. Select the KMS Customer Master Key (CMK) to be used under ‘Master Key’\n      7. Select ‘Create Volume’\n      ",
  },
  {
    name: "AWS:EBS-007",
    cloud: "AWS",
    risk: "medium",
    service: "EC2:Volume",
    description: "Ensure EBS Volume is Encrypted with Customer Managed Key",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail: "EBS Volume not Encrypted with Customer Managed Key",
    messagePass: "EBS Volume is Encrypted with Customer Managed Key",
    pageDetail:
      "The recommended best practice is to use customer-managed KMS keys rather than AWS-managed keys in order to have more granular control over encrypting and encrypting data.",
    RemediationSteps:
      "To fix this issue and ensure that EBS volume are encrypted with CMK, please follow these steps:\n                        \n                        1)Navigate to EC2 dashboard at https://console.aws.amazon.com/ec2/.\n                        2)In the navigation panel, under Elastic Block Store, click Volumes and select your EBS volume.\n                        3)Click the Actions dropdown button from the dashboard top menu and select Create p.\n                        4)In the Create Snapshot dialog box, provide a name and a description for the snapshot (optional) and click Create.\n                        5)In the navigation panel, under Elastic Block Store, click Snapshots.\n                        6)Select your newly created EBS snapshot.\n                        7)Click the Actions dropdown button from the dashboard top menu and select Copy.\n                        8)If the source volume is not encrypted, in the Copy Snapshot dialog box, select Encrypt this snapshot. Once the feature is enabled, select your new CMK customer-managed key from the Master Key dropdown list and click Copy.\n                        9)If the source volume is encrypted with a default (aws/ebs), in the Copy Snapshot dialog box, under Master Key select your CMK customer-managed key, click Copy.\n                        10)Select the new (copied) EBS snapshot.\n                        11)Click the Actions dropdown button from the dashboard top menu and select Create Volume.\n                        12)In the Create Volume dialog box, review the volume configuration details and click Create.\n                        13)Click the Actions dropdown button from the dashboard top menu and select Detach Volume.\n                        14)In the Detach Volume dialog box click Yes, Detach.\n                        15)Go back to the navigation panel and click Volumes.\n                        16)Select the original (source) EBS volume.\n                        17)Select the newly created EBS volume (encrypted with the new customer-managed key).\n                        18)Click the Actions dropdown button from the top menu and select Attach Volume.\n                        19)In the Attach Volume dialog box enter your EC2 instance ID and the device name for attachment, then click Attach.\n                        20)Select the Description tab from the bottom panel and make sure the new EBS volume use your own CMK customer-managed\n                        ",
  },
  {
    name: "AWS:ELB-001",
    cloud: "AWS",
    risk: "Medium",
    service: "ELB",
    description:
      "Ensure ELB logging is Enabled for all TCP, HTTP, and HTTPS traffic",
    category: "Security",
    function: "Audit - Log",
    group: "Logging",
    messageFail: "ELBs Traffic logging is not enabled",
    messagePass: " ELBs Traffic logging is enabled",
    pageDetail:
      "Enabling this feature will allow your ELB to record and save information about each TCP and HTTP request made for your backend instances. The access logging data can be extremely useful for security audits and troubleshooting sessions. For example your ELB logging data can be used to analyze traffic patterns in order to detect different types of attacks and help implementing custom protection plans.",
    RemediationSteps:
      "To enable access logs for your load balancer using the console: \n                    1) Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/. \n                    2) On the navigation pane, under LOAD BALANCING, choose Load Balancers. \n                    3) Select your load balancer. \n                    4) On the Description tab, choose Configure Access Logs. \n                    5) On the Configure Access Logs page, do the following: \n                    6) Choose Enable access logs. \n                    7) Leave Interval as the default, 60 minutes. \n                    8) For S3 location, type the name of your S3 bucket, including the prefix (for example, my-loadbalancer-logs/my-app). You can specify the name of an existing bucket or a name for a new bucket. \n                    9) (Optional) If the bucket does not exist, choose Create this location for me. You must specify a name that is unique across all existing bucket names in Amazon S3 and follows the DNS naming conventions. For more information, see Rules for Bucket Naming in the Amazon Simple Storage Service Developer Guide. \n                    10) Choose Save. \n      ",
  },
  {
    name: "AWS:ELB-012",
    cloud: "AWS",
    risk: "High",
    service: "ELB",
    description: "Ensure that ELB SSL Certificate is attached",
    category: "Reliability",
    function: "Cryptography",
    group: "Encryption in Motion",
    messageFail: "ELB SLL Certificate is not attached",
    messagePass: "ELB SLL Certificate is attached",
    pageDetail:
      "ELBS Certificates should be in active state and atatched to relevant ELBs to meet compliance and security guidelines",
    RemediationSteps:
      "To fix this issue, ensure that ELB SSL Certificate is attached please do the following steps:\n                        1)Login to the AWS Management Console.\n                        2)Navigate to AWS ACM (Amazon certificate Manager)\n                        3)Create an ACM Certificate which can be attached to an ELB\n                        4)Navigate to the EC2 dashboard at https://console.aws.amazon.com/ec2/.\n                        5)In the navigation panel, under LOAD BALANCING, click Load Balancers.\n                        6)Select the Elastic Load Balancer that you want to examine.\n                        7)Select the Listeners tab from the bottom panel and click the Edit button under the available listener(s).\n                        8)In the Edit listeners dialog box, click Add to add a new entry.\n                        9)In the Load Balancer Protocol dropdown list, select HTTPS (Secure HTTP).\n                        10)Under the Cipher column, click Change and make sure the latest Predefined Security Policy is selected. If you need to use a custom policy, select Custom Security Policy and configure your own policy. If you apply any changes in this section click Save, otherwise click Cancel to return to the Edit listeners dialog box.\n                        11)Under the SSL Certificate column, click Change and select one of the following options:\n                        12)Choose an existing certificate from AWS Certificate Manager (ACM) - to use an existing SSL certificate purchased via AWS Certificate Manager. If you haven’t purchased any SSL certificates you can click Request a new ACM certificate link and AWS will redirect your request to the ACM dashboard where you can buy the certificate.\n                        \n    \n    ",
  },
  {
    name: "AWS:ELB-013",
    cloud: "AWS",
    risk: "High",
    service: "ELB",
    description: " Ensure that TLS 1.1 or greater security protocol is in use ",
    category: "Security",
    function: "Cryptography",
    group: "Encryption in Motion",
    messageFail: "TLS 1.1 or greater security protocol is false",
    messagePass: "TLS 1.1 or greater security protocol is not false",
    pageDetail:
      "ELBS Certificates should have security level TLS 1.1 or greater and atatched to relevant ELBs to meet compliance and security guidelines",
    RemediationSteps:
      "To fix this issue and ensure that TLS 1.1 or greater security protocol is in use, please do the following steps:\n                        1)Login to the AWS Management Console.\n                        2)Navigate to EC2 dashboard\n                        3)In the navigation panel, under Load balancing, click Load Balancers.\n                        4)Select your Elastic Load Balancer.\n                        5)Select the Listeners tab from the bottom panel.\n                        6)In the Cipher column of the HTTPS listener click Change:\n                        7)In the Select a Cipher dialog box, select one of the following options configurations:\n                        8)Predefined Security Policy:\n                          -Select the latest predefined security policy from the list named ELBSecurityPolicy-TLS-1-2-2017-01 or ELBSecurityPolicy-TLS-1-1-2017-01 or ELBSecurityPolicy-2016-08 and then click Save. The selected predefined policy does NOT include the Protocol-SSLv2, Protocol-SSLv3, and Protocol-TLSv1 unsafe protocols.\n                        9)Custom Security Policy:\n                          -Uncheck Protocol-SSLv2 and/or Protocol-SSLv3 and/or Protocol-TLSv1 from the SSL Protocols section & found in your SSL custom policy and then click Save.\n                          \n          \n      ",
  },
  {
    name: "AWS:ELB-014",
    cloud: "AWS",
    risk: "High",
    service: "ELB",
    description: " Ensure that relevant Cipher are enabled ",
    category: "Security",
    function: "Cryptography",
    group: "Encryption in Motion",
    messageFail: "Relevant Cipher are not enabled",
    messagePass: "Relevant Cipher are enabled",
    pageDetail:
      "Using insecure and deprecated ciphers for your ELB Predefined Security Policy or Custom Security Policy could make the SSL connection between the client and the load balancer vulnerable to exploits. If your ELB SSL negotiation configuration use outdated cipher suites, we highly recommend that you update it using the information provided in this guide (see Remediation/Resolution section).",
    RemediationSteps:
      'To ensure that relevant Ciphers are attached, please do the following steps:\n                        1)Login to the AWS Management Console:\n                        2)Navigate to EC2 dashboard\n                        3)In the navigation panel, under Load balancing, click Load Balancers.\n                        4)Select your Elastic Load Balancer.\n                        5)Select the Listeners tab from the bottom panel.\n                        6)In the Cipher column of the HTTPS listener click Change:\n                        7)In the Select a Cipher dialog box, select one of the following options configurations:\n                          -Predefined Security Policy:Select the latest predefined security policy from the list named "ELBSecurityPolicy-2016-08": and then click Save.\n                          -Custom Security Policy:Uncheck any insecure / deprecated ciphers from the SSL Ciphers section: found during the audit process (see Audit I.7.b.) and then click Save\n                          ',
  },
  {
    name: "AWS:IAM-007",
    cloud: "AWS",
    risk: "High",
    service: "IAM",
    description:
      " Ensure multi-factor authentication (MFA) is enabled for all IAM users that have a password ",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail:
      "Multi-factor authentication (MFA) is not enabled for all IAM users that have a password",
    messagePass:
      "Multi-factor authentication (MFA) is enabled for all IAM users that have a password",
    pageDetail:
      "Having MFA-protected IAM users is the best way to protect your AWS resources and services against attackers. An MFA device signature adds an extra layer of protection on top of your existing IAM user credentials (username and password), making your AWS account virtually impossible to penetrate without the MFA generated passcode.",
    RemediationSteps:
      "Perform the following to enable MFA:\n                        1. Sign in to the AWS Management Console and open the IAM console at https://console.aws.amazon.com/iam/.\n                        2. In the navigation pane, choose Users.\n                        3. In the User Name list, choose the name of the intended MFA user.\n                        4. Choose the Security Credentials tab, and then choose Manage MFA Device.\n                        5. In the Manage MFA Device wizard, choose A virtual MFA device, and then choose Next Step.\n                        6. Open your virtual MFA application. (For a list of apps that you can use for hosting virtual MFA devices, see Virtual MFA Applications.) If the virtual MFA application supports multiple accounts (multiple virtual MFA devices), choose the option to create a new account (a new virtual MFA device).\n                        7. Determine whether the MFA app supports QR codes, and then do one of the following:\n                           - Use the app to scan the QR code. For example, you might choose the camera icon or choose an option similar to Scan code, and then use the device's camera to scan the code.\n                           - In the Manage MFA Device wizard, choose Show secret key for manual configuration, and then type the secret configuration key into your MFA application. When you are finished, the virtual MFA device starts generating one-time passwords.\n                        8. In the Manage MFA Device wizard, in the Authentication Code 1 box, type the one-time password that currently appears in the virtual MFA device. Wait up to 30 seconds for the device to generate a new one-time password. Then type the second one-time password into the Authentication Code 2 box. Choose Active Virtual MFA.\n    \n        \n    ",
  },
  {
    name: "AWS:IAM-010",
    cloud: "AWS",
    risk: "Low",
    service: "IAM",
    description:
      "Ensure IAM password policy requires at least one uppercase letter",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "IAM password policy does not require uppercase letter",
    messagePass: "IAM password policy requires uppercase letter",
    pageDetail:
      'Enforcing AWS IAM passwords strength, pattern and rotation is vital when it comes to maintaining the security of your AWS account. Having a strong password policy such as "at least one uppercase letter" in use will significantly reduce the risk of password-guessing and brute-force attacks.',
    RemediationSteps:
      'Perform the following to set the password policy as prescribed:\n                        Via AWS Console\n                        1. Login to AWS Console (with appropriate permissions to View Identity Access\n                        Management Account Settings)\n                        2. Go to IAM Service on the AWS Console\n                        3. Click on Account Settings on the Left Pane\n                        4. Check "Requires at least one uppercase letter"\n                        5. Click "Apply password policy"\n         \n    ',
  },
  {
    name: "AWS:IAM-013",
    cloud: "AWS",
    risk: "Low",
    service: "IAM",
    description: "Ensure IAM password policy require at least one number ",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "IAM password policy does not require number",
    messagePass: "IAM password policy  at least one number",
    pageDetail:
      'Enforcing AWS IAM passwords strength, pattern and rotation is vital when it comes to maintaining the security of your AWS account. Having a strong password policy such as "require at least one number" in use will significantly reduce the risk of password-guessing and brute-force attacks.',
    RemediationSteps:
      'Perform the following to set the password policy as prescribed:\n                        1. Login to AWS Console (with appropriate permissions to View Identity Access\n                        Management Account Settings)\n                        2. Go to IAM Service on the AWS Console\n                        3. Click on Account Settings on the Left Pane\n                        4. Check "Require at least one number"\n                        5. Click "Apply password policy"  \n         \n    ',
  },
  {
    name: "AWS:IAM-014",
    cloud: "AWS",
    risk: "Low",
    service: "IAM",
    description:
      "Ensure IAM password policy requires minimum length of 14 or greater",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "Password does not require minimum length of 14 digits",
    messagePass: "Password requires minimum length of 14 digits",
    pageDetail:
      'Enforcing AWS IAM passwords strength, pattern and rotation is vital when it comes to maintaining the security of your AWS account. Having a strong password policy such as "requires minimum length of 14 or greater" in use will significantly reduce the risk of password-guessing and brute-force attacks.',
    RemediationSteps:
      'Via AWS Console\n                          1. Login to AWS Console (with appropriate permissions to View Identity Access\n                          Management Account Settings)\n                          2. Go to IAM Service on the AWS Console\n                          3. Click on Account Settings on the Left Pane\n                          4. Set "Minimum password length" to 14 or greater.\n                          5. Click "Apply password policy"\n                                \n    ',
  },
  {
    name: "AWS:IAM-015",
    cloud: "AWS",
    risk: "Medium",
    service: "IAM",
    description: "Ensure IAM password policy prevents password reuse.",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "Password policy does not prevent password reuse",
    messagePass: "Password policy prevents password reuse",
    pageDetail:
      'Enforcing AWS IAM passwords strength, pattern and rotation is vital when it comes to maintaining the security of your AWS account. Having a strong password policy such as "prevents password reuse" in use will significantly reduce the risk of password-guessing and brute-force attacks.',
    RemediationSteps:
      '"Perform the following to set the password policy as prescribed:\n                        Via AWS Console\n                        1. Login to AWS Console (with appropriate permissions to View Identity Access\n                        Management Account Settings)\n                        2. Go to IAM Service on the AWS Console\n                        3. Click on Account Settings on the Left Pane\n                        4. Check ""Prevent password reuse""\n                        5. Set ""Number of passwords to remember"" is set to 24 \n    "\n    ',
  },
  {
    name: "AWS:IAM-016",
    cloud: "AWS",
    risk: "Medium",
    service: "IAM",
    description:
      "Ensure IAM password policy expires passwords within 90 days or less",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "Password policy does not expire passwords within 90 days",
    messagePass: "Password policy expires passwords within 90 days",
    pageDetail:
      'Enforcing AWS IAM passwords strength, pattern and rotation is vital when it comes to maintaining the security of your AWS account. Having a strong password policy such as " passwords within 90 days or less" in use will significantly reduce the risk of password-guessing and brute-force attacks.',
    RemediationSteps:
      'Perform the following to set the password policy as prescribed:\n                        Via AWS Console\n                        1. Login to AWS Console (with appropriate permissions to View Identity Access\n                        Management Account Settings)\n                        2. Go to IAM Service on the AWS Console\n                        3. Click on Account Settings on the Left Pane\n                        4. Check "Password policy expires passwords within 90 days or less"\n                        5. Set "Number of passwords to remember" is set to 24 \n     \n         \n    ',
  },
  {
    name: "AWS:IAM-020",
    cloud: "AWS",
    risk: "Medium",
    service: "IAM",
    description: "Ensure IAM policies are attached only to groups or roles",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "IAM policies are not attached to only groups or roles",
    messagePass: "IAM policies are attached only to groups or roles",
    pageDetail:
      "Defining permissions at the IAM group level instead of IAM user level will allow you manage more efficiently the user-based access to your AWS resources. With this new model you can create groups, attach the necessary policies for each group, then assign IAM users to these groups as needed. The model has few valuable advantages such as removing duplication of information and effort as you don't need to define policies for each individual user anymore or switching existing users between groups as they receive different roles in your organization.",
    RemediationSteps:
      "To fix this issue, please do the following steps:\n    \n                        1)Sign in to the AWS Management Console.\n                        2)Navigate to IAM dashboard at https://console.aws.amazon.com/iam/.\n                        3)In the left navigation panel, choose Users.\n                        4)Select the IAM user that has policies attached (see Audit section) and click on the user name to access its configuration page.\n                        5)On the IAM user configuration page, select Permissions tab.\n                        6)Under Managed Policies section copy each policy identifier displayed in the Policy Name column. Once the information is copied, click the Detach Policy link for each managed policy available in order to detach the policies for the selected user. These policies will be attached later at the group level.\n                        7)In the left navigation panel, choose Groups.\n                        8)Click the Create New Group button from the dashboard top menu to create the group that will contain the IAM user.\n                        9)On the Set Group Name page, enter a name for the new group and click the Next Step button.\n                        10)On the Attach Policy page, in the Filter box, search for the policy names copied at step no. 6 and select each policy returned. Once all policies are selected, click the Next Step button.\n                        11)On the Review page, review the new group configuration then click the Create Group button.\n                        12)Click on the newly created group name to continue the process.\n                        13)On the group configuration page, select Users tab and click Add Users to Group button to add the necessary user.\n                        14)On the Add Users to Group page, select the IAM user specified at step no. 4 and click the Add Users button. Once added the user name will be listed in the Users tab.\n                        15)Click on the user added at the previous step to access its configuration page. Inside Managed Policies section, AWS should list all the policies attached to the IAM group, inherited automatically by the IAM user.\n                          ",
  },
  {
    name: "AWS:IAM-021",
    cloud: "AWS",
    risk: "Medium",
    service: "IAM",
    description: "Ensure security contact information is registered  ",
    category: "Security",
    function: "Communication",
    group: "IAM",
    messageFail: "security contact information is not enable",
    messagePass: "security contact information is enable",
    pageDetail:
      "By default there are no security challenge questions set for your AWS account. Enabling and configuring security challenge questions will add an extra layer of security to your account.",
    RemediationSteps:
      "1) Sign in to the AWS Management Console.\n  2) Navigate to your AWS account settings page at https://console.aws.amazon.com/billing/home?#/account/.\n  3) Scroll down to Configure Security Challenge Questions section and click the Edit link:\n     to display the security challenge questions configuration form.\n  4) Select three different questions made available by Amazon and provide the appropriate answers to the selected questions, e.g.\n  5) To make sure you won't lose them, write down and store the answers in a secure but accessible location.\n  6) Click the Update button to save the changes.\n           \n      ",
  },
  {
    name: "AWS:KMS-004",
    cloud: "AWS",
    service: "KMS",
    description: "Identify KMS Key is not scheduled for deletion",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    risk: "high",
    messageFail: "KMS Key is scheduled for deletion",
    messagePass: "No KMS Keys are marked for deletion",
    pageDetail:
      "Deleting a KMS Customer Master Key (CMK) is highly problematic when unintended. Once the key is deleted, data that was encrypted with the CMK can no longer be accessed or decrypted.",
    RemediationSteps:
      "\"1. Sign into the AWS Management Console.\n\n  2. Navigate to IAM dashboard at https://console.aws.amazon.com/iam/.\n  \n  3. In the left navigation panel, click Encryption Keys.\n  \n  4. Select the appropriate AWS region from the Filter menu:\n  \n  5. Under Status column, check for any keys scheduled for deletion with the current status set to Pending Deletion.\n  \n  6. Select the key, click the Key Actions button from the dashboard top menu and select Cancel key deletion:  Once the scheduled delete action is cancelled, the key status moves from 'Pending Deletion' to 'Disabled'.\n  \n  7. Repeat step no. 4, 5 and 6 for all AWS regions.\n  \"",
  },
  {
    name: "AWS:KMS-005",
    cloud: "AWS",
    service: "KMS",
    description: "Ensure your KMS Keys are not open to the public",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    risk: "high",
    messageFail: "KMS key is open to Publlic and exposed",
    messagePass: "KMS Keys are not open to Public",
    pageDetail:
      "It is common for user to grant full permission to services, but users forget to set the condition to deny for KMS keys. These keys can easily be exposed to outside world. ",
    RemediationSteps:
      '"1. Login to the AWS Management Console.\n\n  2. Navigate to IAM dashboard at https://console.aws.amazon.com/iam/.\n  \n  3. In the left navigation panel, click Encryption Keys.\n  \n  4. Click on the KMS key that you want to reconfigure (see Audit section part I to identify the right resource).\n  \n  5. On the selected key configuration page, inside the Key Policy section, perform the following action:\n  Add a Condition clause such as ""Condition\': {""StringEquals"": { ""kms:CallerAccount"": ""123456789012"" } } to the existing policy statement\n  6. Click Save Changes to apply the policy changes.\n  \n  7. Repeat steps no. 4 - 6 to update the access policy for other AWS KMS master keys available in the current region in order to block anonymous access.\n  \n  8. Change the AWS region from the navigation bar and repeat the process for other regions.\n  "',
  },
  {
    name: "AWS:LAMBDA-001",
    cloud: "AWS",
    risk: "high",
    service: "LAMBDA",
    description: "Ensure no Lambda Functions are publicly exposed",
    category: "Security",
    function: "Access Control",
    group: "Security",
    messageFail: "Lambda function is exposed publicly",
    messagePass: "Lambda function is not publicly exposed",
    pageDetail:
      "Identify any publicly accessible AWS Lambda functions and update their access policy in order to protect against unauthorized users that are sending requests to invoke these functions.",
    RemediationSteps:
      '"1) Login to the AWS Management Console.\n\n  2) Navigate to Lambda dashboard at https://console.aws.amazon.com/lambda/.\n  \n  3) In the navigation panel, under AWS Lambda section, choose Functions.\n  \n  4) Choose the Lambda function that you want to examine then click on the function name to access its configuration page.\n  \n  5) Select the Triggers tab then click View function policy to expand the panel with the policy used to manage the function invocation permissions.\n  \n  6) Inside the Lambda function policy box, check the Principal element value. If the Principal element has one of the following values: ""*"" or { ""AWS"": ""*"" } and the function policy is not using any Condition clauses such as \'Condition\': {\'StringEquals\': { \'AWS:SourceAccount\': \'<aws_account_number>\' } } to filter the access, the selected Amazon Lambda function is exposed to anonymous access.\n  \n  7) Repeat steps no. 4 - 6 to verify the resource-based policy for other Amazon Lambda functions created within the current region for public access.\n  \n  8) Change the AWS region from the navigation bar and repeat the process for the other regions.\n  \n  "',
  },
  {
    name: "AWS:LAMBDA-002",
    cloud: "AWS",
    risk: "high",
    service: "LAMBDA",
    description: "Lambda Function With Admin Privileges",
    category: "Security",
    function: "Access Control",
    group: "Security",
    messageFail: "Lambda Function has Admin Privileges",
    messagePass: "Lambda Function has no Admin Privileges",
    pageDetail:
      'We have to check if a Lamdba fucntion has admin prevelliges. First we will list all the lamdba functions, then we will get role arn of each fucntion. Once that is done we will check for role policies of each role. after that we will loop through each role policy to get it\'s policy document. Check the policy document returned by the get-role-policy command output and identify Action and Resource policy elements and their current values. If the elements values are set to "*" and the Effect is set to "Allow", as shown in the example above, the attached IAM policy provides access to all AWS actions and resources.',
    RemediationSteps:
      '"1. Login to the AWS Management Console.\n\n  2. Navigate to Lambda dashboard at https://console.aws.amazon.com/lambda/.\n  \n  3. In the navigation panel, under AWS Lambda section, choose Functions.\n  \n  4. Choose the Lambda function that you want to examine then click on the function name to access its configuration page.\n  \n  5. Select the Configuration tab then click Execution role to expand the panel with IAM role that defines the permissions for the selected function.\n  \n  6. Inside the Execution role panel, perform one of the following actions:\n  \n  - To apply an existing execution role, select Choose an existing role from the first dropdown list, then select the name of the existing IAM role from the second dropdown list. The chosen IAM role must adhere to the Principle of Least Privilege and provide only the access permissions required by the selected function.\n  - To apply a new execution role, built using Lambda policy templates, select Create new role from template(s) from the first dropdown list, enter a name for the IAM role within Role name box and select one or more templates from the Policy templates dropdown list.\n  - To apply a custom execution role, select Create a custom role from the dropdown list to redirect you to the AWS Lambda requires access to your resources page where you can create your own IAM execution role for the selected Lambda function. Once your new custom role is defined, click Allow to add the custom IAM role to the current function configuration.\n  \n  7. Click the Save button from the dashboard top menu to update the function configuration and apply the appropriate IAM execution role.\n  \n  8. Repeat steps no. 4 -7 to change the IAM execution role for other Amazon Lambda functions created in the current AWS region.\n  \n  9. Change the AWS region from the navigation bar and repeat the entire process for the other regions."',
  },
  {
    name: "AWS:LAMBDA-003",
    cloud: "AWS",
    risk: "high",
    service: "LAMBDA",
    description:
      "Ensure that an IAM Role is not used for more than one Lambda Function",
    category: "Security",
    function: "Access Control",
    group: "Security",
    messageFail: "IAM role is used for more than one Lambda Function",
    messagePass: "IAM role is not used for more than one Lambda Function",
    pageDetail:
      "Ensure that Amazon Lambda functions do not share the same AWS IAM execution role in order to promote the Principle of Least Privilege (POLP). Hence we will list all the fucntions and get their IAM role arn. Then we will compare the IAM role ARN of all the functions and if any two or more functions have the same IAM role ARN it will FAIL",
    RemediationSteps:
      '"1. Login to the AWS Management Console.\n\n  2. Navigate to Lambda dashboard at https://console.aws.amazon.com/lambda/.\n  \n  3. In the navigation panel, under AWS Lambda section, choose Functions.\n  \n  4. Choose the Lambda function that you want to reconfigure then click on the function name to access its configuration page.\n  \n  5. Select the Configuration tab then click Execution role to expand the panel with IAM role that defines the permissions for the selected function.\n  \n  6. Within Execution role section, perform one of the following actions:\n  \n  - To apply an existing execution role, select Choose an existing role from the first dropdown list, then select the name of the existing IAM role from the second dropdown list. The chosen IAM role cannot be associated with another Lambda function and must adhere to the Principle of Least Privilege by providing only the access permissions required by the selected function.\n  - To apply a new execution role, built using Lambda policy templates, select Create new role from template(s) from the first dropdown list, enter a unique name for the IAM role within Role name box and select one of more templates from the Policy templates dropdown list.\n  - To apply a custom execution role, select Create a custom role from the dropdown list to redirect you to the AWS Lambda requires access to your resources page where you can create your own IAM execution role for the selected Lambda function. Once your new custom role is defined, click Allow to add the custom IAM role to the current function configuration.\n  \n  7. Click the Save button from the dashboard top menu to update the function configuration and apply the individual IAM execution role.\n  \n  8. Go back to the AWS Lambda Functions page and repeat steps no. 4 – 7 for the rest of the Amazon functions available in the selected AWS region. Make sure each Lambda function uses its own individual IAM execution role with the right set of permissions.\n  \n  9. Change the AWS region from the navigation bar and repeat the entire process for the other regions."',
  },
  {
    name: "AWS:RDS-002",
    risk: "Medium",
    cloud: "AWS",
    service: "RDS",
    description:
      "Ensure RDS Database is Encrypted via Customer Managed KMS Key ",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail: "RDS Database is not encrypted via customer managed KMS key",
    messagePass: "RDS Database is encrypted via customer managed KMS key",
    pageDetail:
      "Although you have flexibility of using AWS manage keys vs Customer managed (KMS) for RDS. The best practice is to use customer managed keys (KMS) for RDS since it provides much more granular protection for encrypting data on both ends.  This signature identifies if Customer-Managed (KMS) keys. Only warning is issued when not found. ",
    RemediationSteps:
      "To encrypt your RDS with Customer Managed Keys, please do the following steps:\n\n    1)\tLogin to the AWS Management Console.\n    2)\tNow an existing CMK must be applied to encrypt/decrypt the RDS instance data. In order to start the process, navigate to the RDS dashboard at https://console.aws.amazon.com/rds/.\n    3)\tIn the navigation panel, under RDS Dashboard, click Instances.\n    4)\tSelect the RDS database instance that you want to encrypt.\n    5)\tClick Instance Actions button from the dashboard top menu and select Take Snapshot.\n    6)\tOn the Take DB Snapshot page, enter a name for the instance snapshot in the Snapshot Name field and click Take Snapshot (the backup process may take few minutes and depends on your instance storage size).\n    7)\tSelect the new created snapshot and click the Copy Snapshot button from the dashboard top menu.\n    8)\tOn the Make Copy of DB Snapshot page\n    9)\tClick Copy Snapshot to create an encrypted copy of the selected instance snapshot.\n    10)\tSelect the new snapshot copy and click Restore Snapshot button from the dashboard top menu. This will restore the encrypted snapshot to a new database instance.\n    11)\tOn the Restore DB Instance page, enter a unique name for the new database instance in the DB Instance Identifier* field.\n    12)\tReview the instance configuration details and click Restore DB Instance.\n    ",
  },
  {
    name: "AWS:RDS-004",
    cloud: "AWS",
    risk: "High",
    service: "RDS",
    description: "Ensure RDS Database is not open to Public Internet",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "RDS Database is open to Public Internet",
    messagePass: "RDS Database is not open to Public Internet",
    pageDetail:
      "Normally RDS are not open to the internet, unless there is a specific reason for having it open.  Care should be taken for all open RDS. Also you should never store Personal Identifiable Information while DB is set to open to Public",
    RemediationSteps:
      "To Fix This Issue, Please follow these steps:\n\n    1)\tLogin to the AWS Management Console.\n    2)\tNavigate to RDS dashboard at https://console.aws.amazon.com/rds/.\n    3)\tIn the navigation panel, under RDS Dashboard, click Instances.\n    4)\tSelect the RDS instance that you want to update.\n    5)\tClick Instance Actions button from the dashboard top menu and select Modify.\n    6)\tOn the Modify DB Instance: < instance identifier > page, under Network & Security section, check No next to Publicly Accessible to disable the flag and restrict public access.\n    7)\tAt the bottom of the page, check Apply Immediately to apply the changes immediately.\n    8)\tClick Continue. ",
  },
  {
    name: "AWS:RDS-005",
    cloud: "AWS",
    service: "RDS",
    description: "Identify RDS Event Subscription is Enabled",
    category: "Security",
    function: "Operations",
    group: "Monitoring",
    risk: "Medium",
    messageFail: " RDS Event Subscription is not Enabled",
    messagePass: " RDS Event Subscription is Enabled",
    pageDetail:
      "Best practice is to enable Event Subscription for RDS to analyze and catch all events. You can subscribe to so that you can be notified via AWS SNS by category, like the backup category. ",
    RemediationSteps:
      "To subscribe to RDS event notification\n    \n    1. Sign in to the AWS Management Console and open the Amazon RDS console athttps://console.aws.amazon.com/rds/.\n    2. In navigation pane, choose Event Subscriptions.\n    3. In the Event subscriptions pane, choose Create event subscription.\n    4. In the Create event subscription dialog box, do the following:\n    a. Type a name for the event notification subscription for Name.\n    b. For Send notifications to, choose an existing Amazon SNS Amazon Resource Name (ARN) for an Amazon SNS topic, or choose create topic to enter the name of a topic and a list of recipients.\n    c. For Source type, choose a source type.\n    d. Choose Yes to enable the subscription. If you want to create the subscription but to not have notifications sent yet, choose No.\n    e. Depending on the source type you selected, choose the event categories and sources that you want to receive event notifications for.\n    f. Choose Create.\n    ",
  },
  {
    name: "AWS:RDS-006",
    cloud: "AWS",
    risk: "High",
    service: "RDS",
    description: "Ensure RDS Automatic Backups are turned on",
    category: "Reliability",
    function: "Business Continuity Mngt (BCM)",
    group: "Performance",
    messageFail: "RDS Automated Backup is not turned on",
    messagePass: "RDS Automated Backup is turn on",
    pageDetail:
      "AWS RDS can automatically a full snapshot of your data daily including  transactions logs as defined by the user. The rentention period can also be defined, such as keep the data for certain days et.  Best practice is to enbale this option to stay compliant with the disaster recovery mandates. ",
    RemediationSteps:
      "In AWS Management Console.\n\n    1-        Navigate to RDS dashboard at https://console.aws.amazon.com/rds/.\n    2-        Click on the RDS Dashboard, the select Instances.\n    3-        Select the RDS instance that you want to examine.\n    4-        Select the Instance Actions button from the dashboard and select See Details.\n    5-        Under Availability and Durability section, search for the Automated Backups status:\n    \n    Note: If the current status is set to Disabled, then the RDS service will not snapshots for the selected instance or backups.\n    ",
  },
  {
    name: "AWS:RDS-007",
    cloud: "AWS",
    service: "RDS",
    risk: "Low",
    description:
      "Ensure RDS Event Subscription is Enable for DB Security Group",
    category: "Security",
    function: "Operations",
    group: "Monitoring",
    messageFail: "RDS Event Subscription is not Enable for DB Security Group",
    messagePass: "RDS Event Subscription is Enabled for DB Security Group",
    pageDetail: "RDS Event Subscription is Enable for DB Security Group",
    RemediationSteps:
      "To fix this issue, you need to go into AWS console and enable RDS event subscription for the security group:\n\n    1.\tSign in to the AWS Management Console and open the Amazon RDS console athttps://console.aws.amazon.com/rds/.\n    2.\tSelect Event Subscriptions from the left navigation menu.\n    3.\tSelect Create Event Subscription.\n    4.\tEnter the appropriate information into the following fields: Name and Send notifications to.\n    5.\tSelect the Instances from the Source Type dropdown.\n    6.\tMake sure you have subscribed your DB to all events.\n    7.\tClick Create.\n    ",
  },
  {
    name: "AWS:RDS-009",
    cloud: "AWS",
    risk: "High",
    service: "RDS",
    description: "Check if Multi AZ is Enabled",
    category: "Reliability",
    function: "Business Continuity Mngt (BCM)",
    group: "Disaster Recovery",
    messageFail: "Multi AZ is disabled",
    messagePass: "Multi AZ is enabled",
    pageDetail:
      "When Multi-AZ is enabled, AWS automatically provision and maintain a synchronous database standby replica on a dedicated hardware in a different datacenter (known as Availability Zone). AWS RDS will automatically switch from the primary cluster to the available standby replica in the event of a failure such as an Availability Zone outage, an internal hardware or network outage, a software failure or in case of planned interruptions such as software patching or changing the RDS cluster type.",
    RemediationSteps:
      "To Fix This Issue, Please follow these steps:\n\n    1)        Login to the AWS Management Console.\n    2)        Go to AWS RDS console: https://console.aws.amazon.com/rds\n    3)        Go to Instances tab, select the DB instance that you want to modify.\n    4)        Select Instance Actions dropdown, and select Modify.\n    5)        Under Instance specifications section, choose Yes for Multi-AZ deployment.\n    6)        Select continue, and Modify DB Instance.",
  },
  {
    name: "AWS:RDS-010",
    risk: "High",
    cloud: "AWS",
    service: "RDS",
    description: "Describe RDS and check for Read Replicas",
    category: "Reliability",
    function: "Business Continuity Mngt (BCM)",
    group: "Disaster Recovery",
    messageFail: "Read Replicas are disabled",
    messagePass: "Read Replicas are enabled",
    pageDetail:
      "Monitoring and setting limits for the maximum number of RDS instances provisioned within your AWS account will help you to manage better your database compute resources, prevent unexpected charges on your AWS bill and act fast to mitigate attacks. For example, users within your organization can create more RDS resources than the number established in the company policy, exceeding the monthly budget allocated for cloud computing resources.",
    RemediationSteps:
      "To Fix This Issue, Please follow these steps:\n    1)\tLogin to the AWS Management Console.\n    2)\tGo to AWS RDS console: https://console.aws.amazon.com/rds\n    3)\tGo to Instances tab, select the DB instance that you want to modify.\n    4)\tSelect Instance Actions dropdown, and select Modify.\n    5)\tUnder Instance specifications section, choose Yes for create Read Replicas.\n    6)\tSelect continue, and Modify DB Instance.\n     ",
  },
  {
    name: "AWS:RDS-012",
    cloud: "AWS",
    risk: "High",
    service: "RDS",
    description: "Ensure RDS Transport Encryption is Enabled for SQL Server",
    category: "Security",
    function: "Cryptography",
    group: "Encryption in Motion",
    messageFail: "RDS Transport Encryption is not Enabled for SQL Server",
    messagePass: "RDS Transport Encryption is Enabled for SQL Server",
    pageDetail:
      "This signature checks if Microsoft SQL Server instances provisioned within RDS have Transport Encryption function enabled in order to meet most cryptography security and compliance requirements. Transport Encryption is the RDS feature that forces all connections to a given SQL Server database instances to use SSL. ",
    RemediationSteps:
      "To Fix this Issue, Please follow these steps:        \n\n    1) Sign in to AWS Management Console.\n    2) Navigate to RDS dashboard at https://console.aws.amazon.com/rds/.\n    3 In the left navigation panel, under Amazon RDS, click Parameter groups.\n    4) Select the RDS parameter group that you want to update (see Audit section part I to identify the right resource).\n    5) On the Parameter listing page, enter rds.force_ssl parameter name in the Filter parameters search box and press Enter.\n    6) Select the returned parameter then click the Edit parameters button from the dashboard top-right menu.\n    7) Select 1 from the Value dropdown list available next to the parameter name, then click Save changes to apply the changes.\n    8) Once the required parameter group is successfully updated and the rds.force_ssl parameter value is set to 1, go back to the left navigation panel and select Instances.\n    9) Select the SQL Server database instance that you want to reboot., then click Instance Actions button from the dashboard top menu and select Reboot.\n    10) Inside Reboot DB instance confirmation box, click Reboot to confirm the action. The RDS instance status should change to Rebooting, then back to Available.\n    11) Repeat steps no. 4 – 10 for each SQL Server database instance that doesn't have Transport Encryption feature enabled, available in the current region.\n    12) Change the AWS region from the navigation bar and repeat the process for other regions.",
  },
  {
    name: "AWS:S3-001",
    cloud: "AWS",
    remediatable: true,
    risk: "High",
    service: "S3",
    description:
      "Ensure the S3 default encryption is enabled. All objects stored will be encrypted by leveraging Server-Side Encryption with AWS S3-managed keys",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail:
      "The S3 default encryption is not enabled. Hence objects are being encrypted.",
    messagePass: "The S3 default encryption is enabled.",
    pageDetail:
      "Ensure the S3 default encryption is enabled. All objects stored will be encrypted by leveraging Server-Side Encryption with either AWS S3-managed keys or AWS KMS-managed keys.",
    RemediationSteps:
      "To fix this issue and enable default encryption, follow these steps:\n\n      1) Please Log into your S3 console\n      2) Select on the bucket name.\n      3) Click Properties.\n      4) Select Default Encryption.\n      5) Select AES-256 or AWS-KMS\n      6) If using AWS-KMS, then select a KMS key.\n      7) Click Save.",
  },
  {
    name: "AWS:S3-005",
    cloud: "AWS",
    risk: "Medium",
    service: "S3",
    description: "S3 Bucket has no Global ACL access enabled",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "S3 Bucket has Global ACL access enabled",
    messagePass: "S3 Bucket has no Global ACL access enabled",
    pageDetail:
      "Best practice is create least privileges and providing global access leads to increase risk of potential data loss and security exposure. Avoid setting global edit/delete/post etc.",
    RemediationSteps:
      "Best practice is create least privileges and providing global access leads to increase risk of potential data loss and security exposure. Avoid setting global edit/delete/post etc.",
  },
  {
    name: "AWS:S3-006",
    cloud: "AWS",
    risk: "High",
    service: "S3",
    description: "Ensure S3 bucket Logging Is Enabled",
    category: "Security",
    function: "Audit - Log",
    group: "Logging",
    messageFail: "S3 Logging is not enabled",
    messagePass: "S3 Logging is enabled",
    pageDetail:
      "Best practice is to enable logging as it is requirement for most compliance regulations. Data integrity rules requires this function to be enabled.",
    RemediationSteps:
      "To enable server access logging for an S3 bucket:\n\n    1.\tSign in to the AWS Management Console and open the Amazon S3 console at https://console.aws.amazon.com/s3/.\n    2.\tIn the Bucket name list, choose the name of the bucket that you want to enable server access logging for.\n    3.\tChoose Properties.\n    4.\tChoose Server access logging.\n    5.\tChoose Enable Logging. For Target, choose the name of the bucket that you want to receive the log record objects. The target bucket must be in the same Region as the source bucket.\n    6.\t(Optional) For Target prefix, type a key name prefix for log objects, so that all of the log object names begin with the same string.\n    7.\tChoose Save.\n    8.\tYou can view the logs in the target bucket. If you specified a prefix, the prefix shows as a folder in the target bucket in the console. After you enable server access logging, it might take a few hours before the logs are delivered to the target bucket. For more information about how and when logs are delivered, see Server Access Logging in the Amazon Simple Storage Service Developer Guide.",
  },
  {
    name: "AWS:S3-007",
    cloud: "AWS",
    risk: "Medium",
    service: "S3",
    description: "Identify S3 Bucket has no Global GET Permissions",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "S3 Bucket has Global GET Permissions",
    messagePass: "S3 Bucket has no Global GET Permissions",
    pageDetail:
      "Best practice is create least privileges and providing global access leads to increase risk of potential data loss and security exposure. Avoid setting global edit/delete/post etc.",
    RemediationSteps:
      "Best practice is create least privileges and providing global access leads to increase risk of potential data loss and security exposure. Avoid setting global edit/delete/post etc.",
  },
  {
    name: "AWS:S3-008",
    cloud: "AWS",
    risk: "Medium",
    service: "S3",
    description: "Identify S3 Bucket has no Global PUT Permissions",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: " S3 Bucket has Global PUT Permissions",
    messagePass: " S3 Bucket has no Global PUT Permissions",
    pageDetail:
      "Best practice is create least privileges and providing global access leads to increase risk of potential data loss and security exposure. Avoid setting global edit/delete/post etc.",
    RemediationSteps:
      "Best practice is create least privileges and providing global access leads to increase risk of potential data loss and security exposure. Avoid setting global edit/delete/post etc.",
  },
  {
    name: "AWS:S3-009",
    cloud: "AWS",
    service: "S3",
    risk: "High",
    description: "Ensure there are no global DELETE permissions on the bucket",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: " S3 Bucket has Global DELETE Permissions ",
    messagePass: " S3 Bucket has no Global DELETE Permissions",
    pageDetail:
      "Best practice is create least privileges and providing global access leads to increase risk of potential data loss and security exposure. Avoid setting global edit/delete/post etc.",
    RemediationSteps:
      "Best practice is create least privileges and providing global access leads to increase risk of potential data loss and security exposure. Avoid setting global edit/delete/post etc.",
  },
  {
    name: "AWS:S3-010",
    cloud: "AWS",
    risk: "Medium",
    service: "S3",
    description: "Identify S3 Bucket has no global list permissions",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "S3 Bucket has global list permissions",
    messagePass: "S3 Bucket has no global list permissions",
    pageDetail:
      "Granting global “LIST” access to your S3 buckets can allow unauthorized users to list the objects available within the buckets and use this information to gain access to your data. Cloudnosys strongly recommends against setting READ (LIST) ACL permission for the “Everyone” predefined group in production.",
    RemediationSteps:
      '1) Sign in to the AWS Management Console.\n\n  2) Navigate to S3 dashboard at https://console.aws.amazon.com/s3/.\n  \n  3) Select the S3 bucket that you want to examine and click the Properties tab from the S3 dashboard top right menu:\n  \n  4) In the Properties panel, click Permissions to expand the bucket Access Control List (ACL) configuration tab and search for the grantee (predefined group) named "Everyone". uncheck-the-list-read-permission-applied-to-everyone.png\n  \n  5) Uncheck the List permission applied to "Everyone":\n  \n  or delete the predefined group using the x button next to the group settings:\n  \n  6) Click Save to apply the new ACL configuration and remove the bucket public READ (LIST) access.\n  \n  7) Repeat steps no. 3 – 6 for each publicly “LIST” accessible S3 bucket available in your AWS account.',
  },
  {
    name: "AWS:S3-011",
    cloud: "AWS",
    risk: "High",
    service: "S3",
    description: "Ensure AWS S3 server side encryption is enabled",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail: "AWS S3 server side encryption is not enabled",
    messagePass: "AWS S3 server side encryption is enabled",
    pageDetail:
      'S3 default encryption will enable Amazon to encrypt your S3 data at the bucket level instead of object level in order to protect it from attackers or unauthorized personnel. Without S3 default encryption, to encrypt all objects stored in a bucket, you must include encryption information (i.e. "x-amz-server-side-encryption" header) with every object storage request, as described by the Server Side Encryption (SSE) conformity rule.',
    RemediationSteps:
      "To fix this issue and enable s3 server side encryption, follow these steps:\n\n    1) Please Log into your S3 console\n    2) Select on the bucket name.\n    3) Click Properties.\n    4) Select Default Encryption.\n    5) Select AES-256 or AWS-KMS\n    6) If using AWS-KMS, then select a KMS key.\n    7) Click Save.",
  },
  {
    name: "AWS:S3-012",
    cloud: "AWS",
    remediatable: true,
    risk: "High",
    service: "S3",
    description: "Ensure S3 Traffic is set to SSL - Secure transport ",
    category: "Security",
    function: "Cryptography",
    group: "Encryption in Motion",
    messageFail: "S3 Traffic is not set to SSL - Secure transport ",
    messagePass: "S3 Traffic is set to SSL - Secure transport ",
    pageDetail:
      "The communication between S3 and other AWS services should be encrypted over SSL transport. This is a required by most compliance regulation. If its not encrypted someone can listen to this traffic and compromise the network and data. ",
    RemediationSteps:
      "To Fix this Issue, Please follow these steps:\n\n    1)\tSign in to the AWS Management Console.\n    2)\tNavigate to S3 dashboard at https://console.aws.amazon.com/s3/.\n    3)\tSelect the S3 bucket that you want to encrypt (see Audit section part I to identify the right S3 resource) and click the Properties tab from the dashboard top right menu\n    4)\tInside the Properties tab, click Permissions to expand the bucket permissions settings panel.\n    5)\tClick the Edit bucket policy button to edit the bucket policy in use. If the selected bucket does not have an access policy defined yet, click Add bucket policy.\n    6)\tIn the Bucket Policy Editor dialog box, perform one of the following actions based on your current configuration:\n    7)\tIf there is no access policy currently in use, paste the following policy document in the Bucket Policy Editor box, replace the bucket name, i.e. cc-media-repo,     with the name of your own S3 bucket then click Save. This policy will restrict non-SSL S3 access to all your objects available in the selected S3 bucket\n    8)\tRepeat steps no. 3 - 6 to implement SSL-only access for other S3 buckets created in your AWS account.\n    ",
  },
  {
    name: "AWS:S3-014",
    cloud: "AWS",
    service: "S3",
    description: "Ensure S3 LifeCycle Policy is Enabled",
    category: "Security",
    function: "Integrity",
    group: "Disaster Recovery",
    risk: "High",
    messageFail: "Relevant S3 LifeCycle Policy is not attached",
    messagePass: " Relevant LifeCycle Policy is attached",
    pageDetail:
      "Using AWS S3 lifecycle policy, you can enable Amazon S3 to downgrade the storage class for your objects, archive or delete S3 objects during their lifecycle. For example, you can define S3 lifecycle configuration rules to achieve compliance (with the law, with your organization standards or business requirements) by automatically transitioning your S3 objects to IA or Glacier",
    RemediationSteps:
      "To Fix this Issue please follow these steps:\n\n    1.        Sign in to the AWS Management Console.\n    2.        Navigate to S3 dashboard at https://console.aws.amazon.com/s3/.\n    3.        Click on the name (link) of the S3 bucket that you want to reconfigure (see Audit section part I to identify the right resource).\n    4.        Select the Management tab from the S3 dashboard top menu, choose Lifecycle panel, then click Add lifecycle rule to set up a new lifecycle configuration rule.\n    5.        Inside Lifecycle rule dialog box, perform the following:\n    -        For Name and scope section, provide a unique name for your lifecycle rule in Enter a rule name box and a prefix/tag within Add filter to limit scope to prefix/tags box (e.g. app-logs). Click Next to continue the setup process.\n    -        For Transitions section, select Current version checkbox to add transitions for current version of S3 objects. Click + Add transition, select Transition to Standard-IA after for Object creation and set 30 for Days after object creation. Click + Add transition again, select Transition to Amazon Glacier after for Object creation and set 60 for Days after object creation. Once the necessary transitions are set, click Next to continue.\n    -        For Expiration section, select Current version checkbox to add expiration actions for current version of S3 objects. Select Expire current version of object checkbox and set 365 (days) for After x days from object creation. Click Next to continue.\n    -        For Review section, reexamine the rule configuration details then click Save to create the S3 lifecycle configuration rule.\n    6.        Repeat step no. 4 and 5 to define more lifecycle configuration rules for the selected Amazon S3 bucket.\n    7.        Repeat steps no. 3 – 6 to enable lifecycle configuration for other S3 buckets available in your AWS account.\n   ",
  },
  {
    name: "AWS:S3-016",
    cloud: "AWS",
    remediatable: true,
    risk: "High",
    service: "S3",
    description: "Ensure S3 bucket Versioning is Enabled",
    category: "Security",
    function: "Business Continuity Mngt (BCM)",
    group: "Disaster Recovery",
    messageFail: "S3 Versioning is not enabled",
    messagePass: "S3 Versioning is enabled",
    pageDetail:
      "Using versioning-enabled S3 buckets will allow you to preserve, retrieve, and restore every version of an S3 object. S3 versioning can be used for data protection and retention scenarios such as recovering objects that have been accidentally/intentionally deleted or overwritten by AWS users or applications and archiving previous versions of objects to AWS Glacier for long-term low-cost storage.",
    RemediationSteps:
      'Follow these steps to enable Object Versioning:\n\n    1) Log into your AWS Console, and select the ""S3"" service.\n    2) Select the bucket you wish to enable versioning on, and click the ""Properties"" tab in the upper right frame.\n    3) Expand the ""Versioning"" option\n    4) Click ""Enable Versioning',
  },
  {
    name: "AWS:VPC-002",
    cloud: "AWS",
    risk: "High",
    service: "VPC",
    description: "Ensure VPC Network ACL are not using default settings",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messagePass: "VPC NACL are not using default settings",
    messageFail: "VPC NACL are using default settings",
    pageDetail:
      "Best practice and also many compliance regulations calls for not using default factory settings on firewalls, Network ACL etc.  This signature reviews all unmodified and the only Network ACL for their VPC. A PASS is issued for default ACLs that are not in use and also issues a FAIL alert for default ACLs that were unmodified and only Network ACL for their VPC. Review and modify your settings to non-factory settings. As attackers try default settings to get into the system. ",
    RemediationSteps:
      "Perform the following to implement the prescribed state:\n    \n    1- In your AWS Console go to AWS VPC dashboard at \n    https://console.aws.amazon.com/vpc/.\n    2- You can Filter by VPC of your choice and select the one you want.\n    3- Select the NAT Gateways inspect and modify according to your application traffic needs.\n    4- Repeat for each VPC network and associated NAT gateways available in other regions. ",
  },
  {
    name: "AZU:AD-002",
    risk: "High",
    cloud: "AZURE",
    service: "AD",
    description: "Ensure that there are no guest users",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: "User Type is guest",
    messagePass: "User Type is not guest",
    pageDetail:
      "Azure AD is extended to include Azure AD B2B collaboration, allowing you to invite people from outside your organization to be guest users in your cloud account. Until you have a business need to provide guest access to any user, avoid creating such guest users. Guest users are typically added out of your employee on-boarding/off-boarding process and could potentially be lying there unnoticed indefinitely leading to a potential vulnerability.",
    RemediationSteps:
      "1. Go to Azure Active Directory\n    2. Go to Users and group\n    3. Go to All Users\n    4. Click on Show drop down and select Guest users only\n    5. Ensure that there are no guest users listed (USER TYPE = Guest)",
  },
  {
    name: "AZU:ALA-001",
    risk: "High",
    cloud: "AZURE",
    service: "ALA",
    description: "Ensure that a Log Profile exists for Activity Log",
    category: "Audit - Log",
    function: "Logging and Monitoring",
    group: "Logging",
    messageFail: "Log Profile does not exist for Activity Log, Status is FAIL",
    messagePass: "Log Profile exists for Activity Log, Status is PASS",
    pageDetail:
      "A Log Profile controls how your Activity Log is exported and retained. Since the average time to detect a breach is 210 days, it is recommended to retain your activity log for 365 days or more in order to have time to respond to any incidents.",
    RemediationSteps:
      'Azure Console\n    1. Go to Activity log\n    2. Click on Export\n    3. Configure the setting for Log Profile\n    4. Click on Save" ',
  },
  {
    name: "AZU:ALA-002",
    risk: "High",
    cloud: "AZURE",
    service: "ALA",
    description:
      "Ensure that Activity Log Retention is set 365 days or greater",
    category: "Audit - Log",
    function: "Logging and Monitoring",
    group: "Logging",
    messageFail: "Activity Log Retention is not set 365 days or greater",
    messagePass: "Activity Log Retention is set 365 days or greater",
    pageDetail:
      "A Log Profile controls how your Activity Log is exported and retained. Since the average time to detect a breach is 210 days, it is recommended to retain your activity log for 365 days or more in order to have time to respond to any incidents.",
    RemediationSteps:
      "Azure Console\n    1. Go to Activity log\n    2. Select Export\n    3. Set Retention (days) is set to 365 or greater\n    4. Select Save\n          ",
  },
  {
    name: "AZU:ALA-003",
    risk: "High",
    cloud: "AZURE",
    service: "ALA",
    description:
      "Ensure that Activity Log Alert exists for Create Policy Assignment",
    category: "Audit - Log",
    function: "Logging and Monitoring",
    group: "Logging",
    messageFail:
      "Activity Log Alert does not exists for Create Policy Assignment, status is FAIL",
    messagePass:
      "Activity Log Alert exists for Create Policy Assignment, status is PASS",
    pageDetail:
      "Monitoring for Create Policy Assignment gives insight into privilege assignment and may reduce the time it takes to detect a breach or misuse of information.",
    RemediationSteps:
      "1. Go to Alerts\n    2. Select Add activity log alert\n    3. Set a name, subscription, and resource group in which to store activity log alerts\n    4. Select Event category Administrative\n    5. Select Operation name Create policy assignment\n    6. Set a subscription and action group for alerts\n    7. Select Save\n          ",
  },
  {
    name: "AZU:ALA-004",
    risk: "High",
    cloud: "AZURE",
    service: "ALA",
    description: "Activity Log Alert for Update Security Policy",
    category: "Audit - Log",
    function: "Logging and Monitoring",
    group: "Logging",
    messageFail: "Activity Log Alert for Update Security Policy does not exist",
    messagePass: "Activity Log Alert for Update Security Policy exist",
    pageDetail:
      "Monitoring for Update Security Policy events gives insight into changes to the Security Policy and may reduce the time it takes to detect suspicious activity.",
    RemediationSteps:
      "To remediate this alert,\n    In the Azure console:\n    \n    Go to Alerts.\n    Select Add activity log alert.\n    Set a name, subscription, and resource group in which to store activity log alerts.\n    Set Event category to Administrative.\n    Set Operation to Update Security Policy.\n    Set a subscription and action group for alerts.\n    Select Save.\n          ",
  },
  {
    name: "AZU:KV-001",
    risk: "High",
    cloud: "AZURE",
    service: "KV",
    description: "Ensure that the expiry date is set on all Keys",
    category: "Encryption Keys",
    function: "Key Vault",
    group: "Encryption at Rest",
    messageFail: "Expiry date is not set on all Keys",
    messagePass: "Expiry date is set on all Keys",
    pageDetail:
      "Azure Key Vault enables users to store and use cryptographic keys within the Microsoft Azure environment. The exp (expiration time) attribute identifies the expiration time on or after which the key MUST NOT be used for a cryptographic operation. By default, keys never expire. It is thus recommended that keys be rotated in the key vault and set an explicit expiration time for all keys. This ensures that the keys cannot be used beyond their assigned lifetimes",
    RemediationSteps:
      "1. Go to Key vaults\n    2. For each Key vault, click on Keys.\n    3. Under the Settings section, Make sure Enabled? is set to Yes\n    4. Set an appropriate EXPIRATION DATE on all keys.\n          ",
  },
  {
    name: "AZU:KV-002",
    risk: "High",
    cloud: "AZURE",
    service: "KV",
    description: "Ensure that the expiration date is set on all Secrets",
    category: "Encryption Keys",
    function: "Key Vault",
    group: "Encryption at Rest",
    messageFail: "Expiry date is not set on all secrets",
    messagePass: "Expiry date is set on all secrets",
    pageDetail:
      "The Azure Key Vault enables users to store and keep secrets within the Microsoft Azure environment. Secrets in the Azure Key Vault are octet sequences with a maximum size of 25k bytes each. The exp (expiration time) attribute identifies the expiration time on or after which the secret MUST NOT be used. By default, secrets never expire. It is thus recommended to rotate secrets in the key vault and set an explicit expiration time for all secrets. This ensures that the secrets cannot be used beyond their assigned lifetimes.",
    RemediationSteps:
      "1. Go to Key vaults\n    2. For each Key vault, click on Secrets.\n    3. Under the Settings section, Make sure Enabled? is set to Yes\n    4. Set an appropriate EXPIRATION DATE on all secrets.\n          ",
  },
  {
    name: "AZU:KV-003",
    risk: "High",
    cloud: "AZURE",
    service: "KV",
    description: "Ensure the key vault is recoverable",
    category: "Encryption Keys",
    function: "Key Vault",
    group: "Encryption at Rest",
    messageFail: "Key vault is not recoverable",
    messagePass: "Key vault is recoverable",
    pageDetail:
      'The key vault contains object keys, secrets and certificates. Accidental unavailability of a key vault can cause immediate data loss or loss of security functions (authentication, validation, verification, non-repudiation, etc.) supported by the key vault objects.\n    It is recommended the key vault be made recoverable by enabling the "Do Not Purge" and "Soft Delete" functions. This is in order to prevent loss of encrypted data including storage accounts, SQL databases, and/or dependent services provided by key vault objects (Keys, Secrets, Certificates) etc., as may happen in the case of accidental deletion by a user or from disruptive activity by a malicious user.',
    RemediationSteps:
      "Azure Portal does not have provision to update the respective configurations\n          ",
  },
  {
    name: "AZU:NSG-001",
    risk: "High",
    cloud: "AZURE",
    service: "NSG",
    description: "Ensure that RDP access is restricted from the internet",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "RDP access is not restricted from the internet, Status PASS",
    messagePass: "RDP access is restricted from the internet, Status PASS",
    pageDetail:
      "The potential security problem with using RDP over the Internet is that attackers can use various brute force techniques to gain access to Azure Virtual Machines. Once the attackers gain access, they can use your virtual machine as a launch point for compromising other machines on your Azure Virtual Network or even attack networked devices outside of Azure.",
    RemediationSteps:
      "Disable direct RDP access to your Azure Virtual Machines from the Internet. After direct RDP access from the Internet is disabled, you have other options you can use to access these virtual machines for remote management",
  },
  {
    name: "AZU:NSG-002",
    risk: "High",
    cloud: "AZURE",
    service: "NSG",
    description: "Ensure that SSH access is restricted from the internet",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "SSH access is not restricted from the internet",
    messagePass: "SSH access is restricted from the internet",
    pageDetail:
      "The potential security problem with using SSH over the Internet is that attackers can use various brute force techniques to gain access to Azure Virtual Machines. Once the attackers gain access, they can use your virtual machine as a launch point for compromising other machines on your Azure Virtual Network or even attack networked devices outside of Azure.",
    RemediationSteps:
      "\n  Disable direct SSH access to your Azure Virtual Machines from the Internet. After direct\n  SSH access from the Internet is disabled",
  },
  {
    name: "AZU:NSG-003",
    risk: "High",
    cloud: "AZURE",
    service: "NSG",
    description:
      "Ensure that Global Telnet access is restricted from the internet",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "Telnet access is not restricted from the internet",
    messagePass: "Telnet access is restricted from the internet",
    pageDetail:
      "The potential security problem with using Telnet over the Internet is that attackers can use various brute force techniques to gain access to Azure Virtual Machines. Once the attackers gain access, they can use your virtual machine as a launch point for compromising other machines on your Azure Virtual Network or even attack networked devices outside of Azure.",
    RemediationSteps:
      "\n    Disable direct Telnet access to your Azure Virtual Machines from the Internet. After direct\nTelnet access from the Internet is disabled\n    ",
  },
  {
    name: "AZU:NSG-004",
    risk: "High",
    cloud: "AZURE",
    service: "NSG",
    description:
      "Ensure that Global MySQL access is restricted from the internet",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail:
      "MySQL access is not restricted from the internet, Status FAIL",
    messagePass: "MySQL access is restricted from the internet, Status PASS",
    pageDetail:
      "Global permission to access the well known services TCP Port 3306 (MySQL) should not be allowed in a security group.",
    RemediationSteps:
      "\n      Reduce the permitted IP Addresses or ranges allowed to communicate to destination hosts on TCP port 3306.\nWe recommend utilizing the static office or home IP addresses of your employees as the permitted hosts.\nIf you must permit global access to TCP port 3306 (MySQL).\n                ",
  },
  {
    name: "AZU:PLINK-001",
    risk: "High",
    cloud: "AZURE",
    service: "PLNK",
    description:
      "Ensure Private link exist for Vnet Subnets servers (Sql server/Blobs)",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "Private link does not exist for associated Vnet Subnets",
    messagePass: "Private link exist for associated Vnet Subnets",
    pageDetail:
      "Azure Private Link provides private connectivity from a virtual network to Azure platform as a service (PaaS), customer-owned, or Microsoft partner services. It simplifies the network architecture and secures the connection between endpoints in Azure by eliminating data exposure to the public internet. Therefore it is important to identify those Vnets where we don't have private links configured",
    RemediationSteps:
      "\n    1. Login to Azure Portal using https://portal.azure.com\n    2. Go to Private Links\n    3. Associate a Vnet subnet for which you need to create private link\n    4. Select the resource from the resource group\n    5. Review and create to generate private link for selected resource in the Vnet subnet",
  },
  {
    name: "AZU:SA-001",
    risk: "High",
    cloud: "AZURE",
    service: "SA",
    description:
      "Ensure that 'Storage service encryption' is set to Enabled for Blob Service.",
    category: "Storage",
    function: "Data Protection",
    group: "Encryption at Rest",
    messageFail:
      "Storage service encryption is set to be disabled for Blob Service",
    messagePass:
      "Storage service encryption is set to be Enabled for Blob Service",
    pageDetail:
      "Storage service encryption protects your data at rest. Azure Storage encrypts your data as it's written in its datacenters, and automatically decrypts it for you as you access it.",
    RemediationSteps:
      "\n      Perform the following to implement the prescribed state:\n      1. Go to Storage Accounts\n      2. For each storage account, go to Encryption under BLOB SERVICE\n      3. Set Storage service encryption to Enabled\n      ",
  },
  {
    name: "AZU:SA-002",
    risk: "High",
    cloud: "AZURE",
    service: "SA",
    description:
      "Ensure that 'Storage service encryption' is set to Enabled for File Service",
    category: "Storage",
    function: "Data Protection",
    group: "Encryption at Rest",
    messageFail:
      "Storage service encryption is set to Disabled for File Service",
    messagePass:
      "Storage service encryption is set to Enabled for File Service",
    pageDetail:
      "Storage service encryption protects your data at rest. Azure Storage encrypts your data as it's written in its datacenters, and automatically decrypts it for you as you access it.",
    RemediationSteps:
      "\n    1. Go to Storage Accounts\n    2. For each storage account, go to Encryption under FILE SERVICE\n    3. Set Storage service encryption to Enabled\n        ",
  },
  {
    name: "AZU:SA-003",
    risk: "High",
    cloud: "AZURE",
    service: "SA",
    description: "Storage Account Have Public Accessible Containers",
    category: "Storage",
    function: "Data Protection",
    group: "IAM",
    messageFail:
      "Storage service encryption is set to be disabled for Blob Service",
    messagePass:
      "Storage service encryption is set to be Enabled for Blob Service",
    pageDetail:
      '"One or more of your Storage Accounts has public accessible containers."',
    RemediationSteps:
      '\n    "To resolve this alert, ESP recommends that you edit your containers\' public access level to "private."\n    For more information, see Microsoft: Azure: Enable public read access for containers and blobs in Azure Blob storage."\n          ',
  },
  {
    name: "AZU:SA-004",
    risk: "High",
    cloud: "AZURE",
    service: "SA",
    description: "Ensure that 'Secure transfer required' is set to 'Enabled'",
    category: "Storage",
    function: "Data Protection",
    group: "Encryption in Transit",
    messageFail: "Secure transfer required' is set to Disabled",
    messagePass: "Secure transfer required' is set to Enabled",
    pageDetail:
      "\"The secure transfer option enhances the security of your storage account by only allowing requests to the storage account by a secure connection. For example, when calling REST APIs to access your storage accounts, you must connect using HTTPs. Any requests using HTTP will be rejected when 'secure transfer required' is enabled.\"",
    RemediationSteps:
      "\n    1. Go to Storage Accounts\n    2. For each storage account, go to Configuration\n    3. Set Secure transfer required to Enabled\n          ",
  },
  {
    name: "AZU:SQLDB-001",
    risk: "High",
    cloud: "AZURE",
    service: "SQLDB",
    description: "Ensure that SQL Database 'Data encryption' is set to 'On'",
    category: "SQL Database",
    function: "Database Protection",
    group: "Encryption at Rest",
    messageFail: "SQL Database 'Data encryption' is set to OFF",
    messagePass: "SQL Database 'Data encryption' is set to On",
    pageDetail:
      "Azure SQL Database transparent data encryption helps protect against the threat of malicious activity by performing real-time encryption and decryption of the database, associated backups, and transaction log files at rest without requiring changes to the application.",
    RemediationSteps:
      "\n    Please login to Azure portal & follow these remediation steps:\n    1. Go to SQL databases\n    2. For each DB instance\n    3. Click on Transparent data encryption\n    4. Set Data encryption to On\n              ",
  },
  {
    name: "AZU:SQLDB-002",
    risk: "High",
    cloud: "AZURE",
    service: "SQLDB",
    description: "Ensure that 'Auditing' is set to 'On'",
    category: "Audit - Log",
    function: "Database Auditing",
    group: "Logging",
    messageFail: "SQL Database 'Auditing' is set to OFF",
    messagePass: "SQL Database 'Auditing' is set to On",
    pageDetail:
      "Auditing tracks database events and writes them to an audit log in your Azure storage account. It also helps you to maintain regulatory compliance, understand database activity, and gain insight into discrepancies and anomalies that could indicate business concerns or suspected security violations.",
    RemediationSteps:
      "\n      Please login to Azure portal & follow these remediation steps:\n      1. Go to SQL databases\n      2. For each DB instance\n      3. Click on Auditing & Threat Detection\n      4. Ensure that Auditing is set to On\n            ",
  },
  {
    name: "AZU:SQLDB-003",
    risk: "High",
    cloud: "AZURE",
    service: "SQLDB",
    description:
      "Ensure that 'Threat Detection' on SQL Database is set to 'On'",
    category: "SQL Database",
    function: "Database Protection",
    group: "Monitoring",
    messageFail: "'Threat Detection' on SQL Database is not set to On",
    messagePass: "'Threat Detection' on SQL Database is set to On",
    pageDetail:
      "\n    SQL Threat Detection provides a new layer of security, which enables customers to detect and respond to potential threats as they occur by providing security alerts on anomalous activities. Users will receive an alert upon suspicious database activities, potential vulnerabilities, and SQL injection attacks, as well as anomalous database access patterns. SQL Threat Detection alerts provide details of suspicious activity and recommend action on how to investigate and mitigate the threat.\n    ",
    RemediationSteps:
      "\n    1. Go to SQL databases\n    2. For each DB instance\n    3. Click on Auditing & Threat Detection\n    4. Set Threat Detection to On\n            ",
  },
  {
    name: "AZU:SQLDB-004",
    risk: "Medium",
    cloud: "AZURE",
    service: "SQLDB",
    description:
      "Ensure that Threat Detection types is set to Sql_Injection_Vulnerability Access_Anomaly",
    category: "SQL Database",
    function: "Database Protection",
    group: "Monitoring",
    messageFail:
      "Threat Detection types is not set to Sql_Injection_Vulnerability Access_Anomaly",
    messagePass:
      "Threat Detection types is set to Sql_Injection_Vulnerability Access_Anomaly",
    pageDetail:
      "Enabling all threat detection types, you are protected against SQL injection, database vulnerabilities and any other anomalous activities.",
    RemediationSteps:
      "\n    1. Go to SQL databases\n    2. For each DB instance\n    3. Click on Auditing & Threat Detection \n    4. Set Threat Detection types to All\n    ",
  },
  {
    name: "AZU:SQLDB-005",
    risk: "High",
    cloud: "AZURE",
    service: "SQLDB",
    description: "Ensure that 'Threat' Retention is 'greater than 90 days'",
    category: "SQLDB",
    function: "Database Protection",
    group: "Monitoring",
    messageFail: "Threat Retention is less than 90 days",
    messagePass: "Threat Retention is greater than 90 days",
    pageDetail:
      "SQL Database Threat Retention should be configured to be greater than 90 days.",
    RemediationSteps:
      "\n      1. Go to SQL databases\n      2. For each database, click on Auditing & Threat Detection\n      3. Ensure that Auditing is set to ON\n      4. Click on Storage details\n      5. Ensure that the Retention (Days) is set to 90 or above.\n                ",
  },
  {
    name: "AZU:SQLSVR-001",
    risk: "High",
    cloud: "AZURE",
    service: "SQLSVR",
    description: "Ensure that SQL server 'Auditing' is set to 'On'",
    category: "SQL Server",
    function: "SQL Server Protection",
    group: "Monitoring",
    messageFail: "SQL Server Auditing is set to OFF",
    messagePass: "SQL Server Auditing is set to On",
    pageDetail:
      "The Azure platform allows you to create a SQL server as a service. Enabling auditing at the server level ensures that all existing and newly created databases on the SQL server instance are audited.",
    RemediationSteps:
      "\n      1. Go to SQL servers\n      2. For each server instance\n      3. Click on Auditing & Threat Detection\n      4. Set Auditing to On\n                ",
  },
  {
    name: "AZU:SQLSVR-002",
    risk: "High",
    cloud: "AZURE",
    service: "SQLSVR",
    description: "Ensure that 'Auditing' Retention is 'greater than 90 days",
    category: "SQL Server",
    function: "SQL Server Protection",
    group: "Logging",
    messageFail:
      "SQL Server Audit Retention is not configured to be greater than 90 days",
    messagePass:
      "SQL Server Audit Retention is configured to be greater than 90 days",
    pageDetail:
      "SQL Server Audit Retention should be configured to be greater than 90 days.",
    RemediationSteps:
      "\n    1. Go to SQL servers\n    2. For each server instance\n    3. Click on Auditing & Threat Detection\n    4. Select Storage Details\n    5. Set Retention (days) setting greater than 90 days\n    6. Select OK\n    7. Select Save\n    ",
  },
  {
    name: "AZU:SQLSVR-003",
    risk: "High",
    cloud: "AZURE",
    service: "SQLSVR",
    description: "Ensure that 'Threat Detection' on SQL server is set to 'On' ",
    category: "SQL Server",
    function: "SQL Server Protection",
    group: "Monitoring",
    messageFail: "Threat Detection on SQL Server is not set to OFF",
    messagePass: "Threat Detection on SQL Server is set to On",
    pageDetail:
      "SQL Threat Detection provides a new layer of security, which enables customers to detect and respond to potential threats as they occur by providing security alerts on anomalous activities. Users will receive an alert upon suspicious database activities, potential vulnerabilities, and SQL injection attacks, as well as anomalous database access patterns. SQL Threat Detection alerts provide details of suspicious activity and recommend action on how to investigate and mitigate the threat",
    RemediationSteps:
      "\n      1. Go to SQL servers\n      2. For each server instance\n      3. Click on Auditing & Threat Detection\n      4. Set Threat Detection to On\n                ",
  },
  {
    name: "AZU:SQLSVR-004",
    risk: "High",
    cloud: "AZURE",
    service: "SQLSVR",
    description: "Ensure that 'Send alerts to' is set",
    category: "SQL Server",
    function: "SQL Server Protection",
    group: "Monitoring",
    messageFail: "Email Notifications are not being sent to a verified email ",
    messagePass: "Email Notifications are being sent to a verified email",
    pageDetail:
      "Provide the email address to which alerts will be sent upon detection of anomalous activities on SQL Servers",
    RemediationSteps:
      "\n    1. Go to SQL servers\n    2. For each server instance\n    3. Click on Auditing & Threat Detection\n    4. Set Send alerts to as appropriate\n                ",
  },
  {
    name: "AZU:SQLSVR-005",
    risk: "High",
    cloud: "AZURE",
    service: "SQLSVR",
    description:
      "Ensure that 'Email service and co-administrators' is 'Enabled'",
    category: "SQL Server",
    function: "SQL Server Protection",
    group: "Monitoring",
    messageFail:
      "Email Notifications are not being sent to account admin email",
    messagePass: "Email Notifications are being sent to account admin email",
    pageDetail:
      "Provide the email address to which alerts will be sent upon detection of anomalous activities on SQL Servers",
    RemediationSteps:
      "\n    1. Go to SQL servers\n    2. For each server instance\n    3. Click on Auditing & Threat Detection\n    4. Enable Email service and co-administrators\n                ",
  },
  {
    name: "AZU:VM-001",
    risk: "High",
    cloud: "AZURE",
    service: "VM",
    description: "Ensure that OS disk are encrypted",
    category: "Cryptography",
    function: "Data Protection",
    group: "Encryption at Rest",
    messageFail: "OS disk are not encrypted",
    messagePass: "OS disk are encrypted",
    pageDetail:
      "Encrypting your IaaS VM's OS disk (boot volume) ensures that its entire content is fully unrecoverable without a key and thus protects the volume from unwarranted reads.",
    RemediationSteps:
      " \n    1. Go to Virtual machines\n2. For each virtual machine, go to Settings\n3. Click on Disks\n4. Eable the OS disk encryption by setting it to Enabled\n    ",
  },
  {
    name: "AZU:VM-002",
    risk: "High",
    cloud: "AZURE",
    service: "VM",
    description: "Ensure that Data disks are encrypted",
    category: "Cryptography",
    function: "Data Protection",
    group: "Encryption at Rest",
    messageFail: "Data disks are not encrypted",
    messagePass: "Data disks are encrypted",
    pageDetail:
      "Encrypting your IaaS VM's Data disks (non-boot volume) ensures that its entire content is fully unrecoverable without a key and thus protects the volume from unwarranted reads.",
    RemediationSteps:
      "1. Go to Virtual machines\n    2. For each virtual machine, go to Settings\n    3. Click on Disks\n    4. Ensure that each disk under Data disks has encryption set to Enabled\n          ",
  },
  {
    name: "AZU:WEBAPPS-001",
    risk: "high",
    cloud: "AZURE",
    service: "WEBAPPS",
    description:
      "Ensure App Service Authentication is set on Azure App Service",
    category: "Security",
    function: "App Service",
    group: "IAM",
    messageFail: "App Service Authentication is not set on Azure App Service",
    messagePass: "App Service Authentication is set on Azure App Service",
    pageDetail:
      "Azure App Service Authentication is a feature that can prevent anonymous HTTP requests from reaching the API app, or authenticate those that have tokens before they reach the API app. If an anonymous request is received from a browser, App Service will redirect to a logon page. To handle the logon process, a choice from a set of identity providers can be made, or a custom authentication mechanism can be implemented.",
    RemediationSteps:
      '"1. Login to Azure Portal using https://portal.azure.com\n    2. Go to App Services\n    3. Click on each App\n    4. Under Setting section, Click on Authentication / Authorization\n    5. Set App Service Authentication to On\n    6. Choose other parameters as per your requirement and Click on Save"',
  },
  {
    name: "AZU:WEBAPPS-002",
    risk: "high",
    cloud: "AZURE",
    service: "WEBAPPS",
    description:
      "Ensure web app redirects all HTTP traffic to HTTPS in Azure App Service",
    category: "Cryptography",
    function: "App Service",
    group: "Encryption in Transit",
    messageFail:
      "Web app does not redirect all HTTP traffic to HTTPS in Azure App Service",
    messagePass:
      "Web app redirects all HTTP traffic to HTTPS in Azure App Service",
    RemediationSteps:
      '"1. Login to Azure Portal using https://portal.azure.com\n    2. Go to App Services\n    3. Click on each App\n    4. Under Setting section, Click on SSL settings\n    5. Set HTTPS Only to On under Protocol Settings section"',
  },
  {
    name: "AZU:WEBAPPS-003",
    risk: "high",
    cloud: "AZURE",
    service: "WEBAPPS",
    description: "Ensure web app is using the latest version of TLS encryption",
    category: "Cryptography",
    function: "App Service",
    group: "Encryption in Transit",
    messageFail:
      "Web app is not using the latest version of TLS encryption 1.2 or Greater",
    messagePass:
      "Web app is using the latest version of TLS encryption 1.2 or Greater",
    pageDetail:
      "The TLS(Transport Layer Security) protocol secures transmission of data over the internet using standard encryption technology. Encryption should be set with the latest version of TLS. App service allows TLS 1.2 by default, which is the recommended TLS level by industry standards, such as PCI DSS.",
    RemediationSteps:
      '"1. Login to Azure Portal using https://portal.azure.com\n    2. Go to App Services\n    3. Click on each App\n    4. Under Setting section, Click on SSL settings\n    5. Set Minimum TLS Version to 1.2 under Protocol Settings section"',
  },
  {
    name: "AZU:WEBAPPS-004",
    risk: "high",
    cloud: "AZURE",
    service: "WEBAPPS",
    description:
      "Ensure the web app has 'Client Certificates (Incoming client certificates)' set to 'On'",
    category: "Cryptography",
    function: "App Service",
    group: "Encryption in Transit",
    messageFail:
      "The web app does not have 'Client Certificates (Incoming client certificates)' set to 'On'",
    messagePass:
      "The web app has 'Client Certificates (Incoming client certificates)' set to 'On'",
    pageDetail:
      "Client certificates allow for the app to request a certificate for incoming requests. Only clients that have a valid certificate will be able to reach the app.",
    RemediationSteps:
      '"1. Login to Azure Portal using https://portal.azure.com\n    2. Go to App Services\n    3. Click on each App\n    4. Under Setting section, Click on SSL settings\n    5. Set Incoming client certificates to On under Protocol Settings section"',
  },
  {
    name: "FBS:CF-001",
    cloud: "GCP",
    risk: "high",
    service: "CloudFunction",
    description:
      "Ensure incoming traffic is restricted to allow internal traffic only",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail:
      "Incoming traffic is not restricted to allow internal traffic only",
    messagePass:
      "Incoming traffic is restricted to allow internal traffic only",
    pageDetail:
      "This signature ensure that incmoing traffic on Cloud Function is restricted from any sort of Public access. This is acheived by removing https access that is ebanled by default and restricted only to be invoked internally as a result of a certain action on firestore database or any other firebase service.",
    RemediationSteps:
      "1. Go to Google Cloud Console.\n    2. Select Cloud functions on the navigation bar.\n    3. Select Create Function from the top bar and set a unique name.\n    4. Scroll down to Networking, in the Ingress settings select the following:\n    - Allow internal traffic only\n    5. Press the Create button.",
  },
  {
    name: "FBS:CF-003",
    cloud: "GCP",
    risk: "medium",
    service: "CloudFunction",
    description:
      "Ensure that VPC connector is attached with Cloud Function for secure access",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "VPC connector is not attached with Cloud Function",
    messagePass: "VPC connector is attached with Cloud Function",
    pageDetail:
      "This is to ensure that Cloud function is only accessed with the resources that are provisioned inside the VPC. Hence inorder for those resources to be able to access Cloud Function we need to ensure that a VPC connector is atatched to it with right configurations",
    RemediationSteps:
      "1. Go to Google Cloud Console.\n    2. Select Cloud functions on the navigation bar.\n    3. Select Create Function from the top bar and set a unique name.\n    4. Scroll down to Networking, in the Egress settings select the following:\n    5. Click on Create a Connector.\n    6. Set a name of your connector, select a network, region and set the IP range.\n    7. Click the Create button.",
  },
  null,
  {
    name: "FBS:CF-006",
    cloud: "GCP",
    risk: "medium",
    service: "CloudFunction",
    description:
      " Ensure that Cloud Function is not using default service account",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: " Cloud Function is using default service account",
    messagePass: " Cloud Function is not using default service account",
    pageDetail:
      "When you use some Google Cloud services, they create user-managed service accounts that enable the service to deploy jobs that access other Google Cloud resources. These accounts are known as default service accounts. Make sure that cloudfunctions do not use such account. ",
    RemediationSteps:
      "1. Go to Google Cloud Console.\n    2. Select Cloud functions on the navigation bar.\n    3. Select Create Function from the top bar and set a unique name.\n    4. Scroll down to Advanced options and select Service Account.\n    5. Select any service account other than the App Engine Default Service Account.\n    6. Click Save.",
  },
  {
    name: "FBS:CF-007",
    cloud: "GCP",
    risk: "high",
    service: "CloudFunction",
    description:
      " Ensure that there are no Cloud Functions with publicly accessible http endpoints",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "Cloud Functions has publicly accessible http endpoints",
    messagePass: " Cloud Functions has no publicly accessible http endpoints",
    pageDetail:
      "The main risk of using a public IP address is the same as the advantage: It allows anyone, anywhere to connect to your device directly from the Internet. Publicily accessible http endpoints can put the data in major risk therefore, while creating a cloudfunction make sure no Public IPs are being used. ",
    RemediationSteps:
      "1. Go to Google Cloud Console.\n    2. Select Cloud functions on the navigation bar.\n    3. Select Create Function from the top bar and set a unique name.\n    4. Select 'http' in Triggers section.\n    5. Save Cloud Function by clicking the create button.",
  },
  {
    name: "GCP:KMS-001",
    cloud: "GCP",
    risk: "high",
    service: "cloudkms",
    description:
      " Ensure that Cloud KMS cryptokeys are not anonymously or publicly accessible",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail: " Cloud KMS cryptokeys are anonymously or publicly accessible",
    messagePass:
      " Cloud KMS cryptokeys are not anonymously or publicly accessible",
    pageDetail:
      "Granting permissions to allUsers or allAuthenticatedUsers allows anyone to access the dataset. Such access might not be desirable if sensitive data is stored at the location. In this case, ensure that anonymous and/or public access to a Cloud KMS cryptokey is not allowed.",
    RemediationSteps:
      "From Command Line: \n    1. List all Cloud KMS Cryptokeys. \n    gcloud kms keys list --keyring=[key_ring_name] --location=global -- format=json | jq '.[ ].name' \n    2. Remove IAM policy binding for a KMS key to remove access to allUsers and allAuthenticatedUsers using the below command:\n    gcloud kms keys remove-iam-policy-binding [key_name] -- keyring=[key_ring_name] --location=global --member='allAuthenticatedUsers' -- role='[role]' \n    gcloud kms keys remove-iam-policy-binding [key_name] -- keyring=[key_ring_name] --location=global --member='allUsers' --role='[role]'",
  },
  {
    name: "GCP:KMS-002",
    cloud: "GCP",
    risk: "medium",
    service: "cloudkms",
    description:
      "Ensure KMS encryption keys are rotated within a period of 90 days",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail:
      "KMS encryption keys are not rotated within a period of 90 days",
    messagePass: " KMS encryption keys are rotated within a period of 90 days",
    pageDetail:
      "Set a key rotation period and starting time. A key can be created with a specified rotation period, which is the time between when new key versions are generated automatically. A key is used to protect some corpus of data. A collection of files could be encrypted with the same key and people with decrypt permissions on that key would be able to decrypt those files. Therefore, it's necessary to make sure the rotation period is set to a specific time.",
    RemediationSteps:
      "From Console:\n    1. Go to Cryptographic Keys by visiting:\n    https://console.cloud.google.com/security/kms.\n    2. Click on the specific key ring\n    3. From the list of keys, choose the specific key and Click on Right side pop up the\n    blade (3 dots).\n    4. Click on Edit rotation period.\n    5. On the pop-up window, Select a new rotation period in days which should be\n    less than 90 and then choose Starting on date (date from which the rotation\n    period begins).\n    From Command Line:\n    1. Update and schedule rotation by ROTATION_PERIOD and NEXT_ROTATION_TIME for\n    each key:\n    gcloud kms keys update new --keyring=KEY_RING --location=LOCATION --nextrotation-time=NEXT_ROTATION_TIME --rotation-period=ROTATION_PERIOD",
  },
  {
    name: "FBS:FS-002",
    cloud: "GCP",
    risk: "High",
    service: "Firestore",
    description: "Ensure Backup Storage Bucket exist for Firestore backups",
    category: "Reliability",
    function: "Business Continuity Mngt (BCM)",
    group: "Performance",
    messageFail: "Backup Storage Bucket does not exist for Firestore backups",
    messagePass: "Backup Storage Bucket exists for Firestore backups",
    pageDetail:
      "Here we need to check that a specific bucket is provisioned for firestore backups only. The customer may identify a specific tag for this bucket which can be looked up. However by default we are going to look for Bucket name 'firestorebackups' in the Storage bucket list and if it does not exist then this signature will fail.",
    RemediationSteps:
      "1. Go to Google Cloud Console.\n  2. Select Storage from the Navigation bar.\n  3. Click on Create Bucket.\n  4. Set a name for your bucket and add 'backups' in it e.g: Bucketname‐backups\n  5. Press Continue. \n  6. Insert the information prior to your bucket and click on Create.",
  },
  {
    name: "FBS:FS-004",
    cloud: "GCP",
    risk: "Medium",
    service: "Firestore",
    description:
      "Ensure that there are no unused Firestore Documents in Project",
    category: "Reliability",
    function: "Business Continuity Mngt (BCM)",
    group: "Performance",
    messageFail: "Firestore has unused Documents in Project",
    messagePass: "Firestore has no unused Documents in Project",
    pageDetail:
      "This is will check and ensure that there are no unsued or empty documents in Firestore for cost and performance optimixation.",
    RemediationSteps:
      "1. Go to Google Cloud Console.\n    2. Select Firestore from the Navigation bar.\n    3. Click on Start Collection. \n    4. Set the Collection ID.\n    5. Add its first Document ID.\n    6. Add the field's name, type and value.\n    7. Click on Save.",
  },
  {
    name: "GCP:VM-001",
    cloud: "GCP",
    risk: "medium",
    service: "Instance",
    description:
      "Ensure that instances are not configured to use the default service account",
    category: "Security",
    function: "Operations",
    group: "Monitoring",
    messageFail:
      "Instances are configured to use the default service account with full access to all Cloud APIs ",
    messagePass:
      "Instances are not configured to use the default service account with full access to all Cloud APIs ",
    pageDetail:
      "The default Compute Engine service account has the Editor role on the project, which allows read and write access to most Google Cloud Services. To defend against privilege escalations if your VM is compromised and prevent an attacker from gaining access to all of your project, it is recommended to not use the default Compute Engine service account. Instead, you should create a new service account and assigning only the permissions needed by your instance. The default Compute Engine service account is named [PROJECT_NUMBER]- compute@developer.gserviceaccount.com.",
    RemediationSteps:
      "From Console: \n    1. Go to the VM instances page by visiting: https://console.cloud.google.com/compute/instances. \n    2. Click on the instance name to go to its VM instance details page. \n    3. Click STOP and then click EDIT. \n    4. Under the section Service Account, select a service account other that the default Compute Engine service account. You may first need to create a new service account. \n    5. Click Save and then click START.\n    \n    From Command Line:\n    1. Stop the instance:\n    gcloud compute instances stop INSTANCE_NAME\n    2. Update the instance:\n    gcloud compute instances set-service-account INSTANCE_NAME --serviceaccount=SERVICE_ACCOUNT\n    3. Restart the instance:\n    gcloud compute instances start INSTANCE_NAME",
  },
  {
    name: "GCP:VM-002",
    cloud: "GCP",
    risk: "high",
    service: "Instance",
    description:
      "Ensure that instances are not configured to use the default service account with full access to all Cloud APIs",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: " Instances are configured to use the default service account",
    messagePass:
      "Instances are not configured to use the default service account ",
    pageDetail:
      "To support principle of least privileges and prevent potential privilege escalation it is recommended that instances are not assigned to default service account Compute Engine default service account with Scope Allow full access to all Cloud APIs.",
    RemediationSteps:
      "From Console:\n    1. Go to the VM instances page by visiting:\n    https://console.cloud.google.com/compute/instances.\n    2. Click on the impacted VM instance.\n    3. If the instance is not stopped, click the Stop button. Wait for the instance to be\n    stopped.\n    4. Next, click the Edit button.\n    5. Scroll down to the Service Account section.\n    6. Select a different service account or ensure that Allow full access to all Cloud\n    APIs is not selected.\n    7. Click the Save button to save your changes and then click START.\n    \n    From Command Line:\n    1. Stop the instance:\n    gcloud compute instances stop INSTANCE_NAME\n    2. Update the instance:\n    gcloud compute instances set-service-account INSTANCE_NAME --serviceaccount=SERVICE_ACCOUNT --scopes [SCOPE1, SCOPE2...]\n    3. Restart the instance:\n    gcloud compute instances start INSTANCE_NAME",
  },
  {
    name: "GCP:VM-003",
    cloud: "GCP",
    risk: "medium",
    service: "Instance",
    description:
      "Ensure 'Block Project-wide SSH Keys' is enabled for VM instances",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "Block Project-wide SSH Keys is disabled for VM instances",
    messagePass: "Block Project-wide SSH Keys is enabled for VM instances",
    pageDetail:
      "Project-wide SSH keys are stored in Compute/Project-meta-data. Project wide SSH keys can be used to login into all the instances within project. Using project-wide SSH keys eases the SSH key management but if compromised, poses the security risk which can impact all the instances within project. It is recommended to use Instance specific SSH keys which can limit the attack surface if the SSH keys are compromised.",
    RemediationSteps:
      "From Console: \n  1. Go to the VM instances page by visiting: https://console.cloud.google.com/compute/instances. It will list all the instances in your project. \n  2. Click on the name of the Impacted instance \n  3. Click Edit in the toolbar\n  4. Under SSH Keys, go to the Block project-wide SSH keys checkbox \n  5. To block users with project-wide SSH keys from connecting to this instance, select Block project-wide SSH keys \n  6. Click Save at the bottom of the page \n  7. Repeat steps for every impacted Instance\n  \n  From Command Line:\n  Block project-wide public SSH keys, set the metadata value to TRUE:\n  gcloud compute instances add-metadata INSTANCE_NAME --metadata block-projectssh-keys=TRUE",
  },
  {
    name: "GCP:VM-004",
    cloud: "GCP",
    risk: "medium",
    service: "Instance",
    description: "Ensure that IP forwarding is not enabled on Instances",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: "IP forwarding is enabled on Instances ",
    messagePass: " IP forwarding is not enabled on Instances",
    pageDetail:
      "Compute Engine instance cannot forward a packet unless the source IP address of the packet matches the IP address of the instance. Similarly, GCP won't deliver a packet whose destination IP address is different than the IP address of the instance receiving the packet. However, both capabilities are required if you want to use instances to help route packets. To enable this source and destination IP check, disable the canIpForward field, which allows an instance to send and receive packets with non-matching destination or source IPs.",
    RemediationSteps:
      "You only edit the canIpForward setting at instance creation time. Therefore, you need to delete the instance and create a new one where canIpForward is set to false. From Console: \n    1. Go to the VM Instances page by visiting: https://pantheon.corp.google.com/compute/instances. \n    2. Select the VM Instance you want to remediate. \n    3. Click the Delete button. \n    4. On the 'VM Instances' page, click 'CREATE INSTANCE'. \n    5. Create a new instance with the desired configuration. By default, the instance is configured to not allow IP forwarding.\n    \n    From Command Line:\n    1. Delete the instance:\n    gcloud compute instances delete INSTANCE_NAME\n    2. Create a new instance to replace it, with IP forwarding set to Off\n    gcloud compute instances create\n    ",
  },
  {
    name: "GCP:NET-001",
    cloud: "GCP",
    risk: "high",
    service: "Network",
    description: " Ensure that the default network does not exist in a project",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: " Default network exists in a project",
    messagePass: " Default network does not exist in a project",
    pageDetail:
      "The default network is an auto mode network, which means that its subnets use the same predefined range of IP addresses, and as a result, it's not possible to use Cloud VPN or VPC Network Peering with the default network. Based on organization security and networking requirements, the organization should create a new network and delete the default network.",
    RemediationSteps:
      "From Console:\n    1. Go to the VPC networks page by visiting:\n    https://console.cloud.google.com/networking/networks/list.\n    2. Click the network named default.\n    3. On the network detail page, click EDIT.\n    4. Click DELETE VPC NETWORK.\n    5. If needed, create a new network to replace the default network.\n    \n    From Command Line:\n    For each Google Cloud Platform project,\n    1. Delete the default network:\n    gcloud compute networks delete default\n    2. If needed, create a new network to replace it:\n    gcloud compute networks create NETWORK_NAME",
  },
  {
    name: "GCP:NET-003",
    cloud: "GCP",
    risk: "high",
    service: "Network",
    description: " Ensure that SSH access is restricted from the internet",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: " SSH access is not restricted from the internet",
    messagePass: "SSH access is restricted from the internet ",
    pageDetail:
      "For an instance to have outgoing Internet access, the network must have a valid Internet gateway route or custom route whose destination IP is specified. This route simply defines the path to the Internet, to avoid the most general (0.0.0.0/0) destination IP Range specified from the Internet through SSH with the default Port 22. Generic access from the Internet to a specific IP Range needs to be restricted.",
    RemediationSteps:
      "From the Console:\n    1. Go to VPC Network.\n    2. Go to the Firewall Rules.\n    3. Click the Firewall Rule you want to modify.\n    4. Click Edit.\n    5. Modify Source IP ranges to specific IP.\n    6. Click Save.\n\n    From Command Line:\n    1.Update the Firewall rule with the new SOURCE_RANGE from the below command:\n    gcloud compute firewall-rules update FirewallName --allow=[PROTOCOL[:PORT[-PORT]],...] --source-ranges=[CIDR_RANGE,...]\n    ",
  },
  {
    name: "GCP:NET-004",
    cloud: "GCP",
    risk: "high",
    service: "Network",
    description: " Ensure that RDP access is restricted from the Internet",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: " RDP access is not restricted from the Internet",
    messagePass: " RDP access is restricted from the Internet",
    pageDetail:
      "Firewall rules are defined at the VPC network level and are specific to the network in which they are defined. The rules themselves cannot be shared among networks. Firewall rules only support IPv4 traffic. When specifying a source for an ingress rule or a destination for an egress rule by address, an IPv4 address or IPv4 block in CIDR notation can be used. Generic (0.0.0.0/0) incoming traffic from the Internet to a VPC or VM instance using RDP on Port 3389 can be avoided.",
    RemediationSteps:
      "From the Console:\n    1. Go to VPC Network.\n    2. Go to the Firewall Rules.\n    3. Click the Firewall Rule to be modified.\n    4. Click Edit.\n    5. Modify Source IP ranges to specific IP.\n    6. Click Save.\n\n    From Command Line:\n    1.Update RDP Firewall rule with new SOURCE_RANGE from the below command:\n    gcloud compute firewall-rules update FirewallName --allow=[PROTOCOL[:PORT[-PORT]],...] --source-ranges=[CIDR_RANGE,...]",
  },
  {
    name: "GCP:IAM-001",
    cloud: "GCP",
    risk: "high",
    service: "ServiceAccount",
    description: "Ensure that corporate login credentials are used",
    category: "Security",
    function: "Access Control",
    group: "Security",
    messageFail: "Corporate login credentials are not used",
    messagePass: "Corporate login credentials are used",
    pageDetail:
      "It is recommended fully-managed corporate Google accounts be used for increased visibility, auditing, and controlling access to Cloud Platform resources. Email accounts based outside of the user's organization, such as personal accounts, should not be used for business purposes.",
    RemediationSteps:
      "Follow the documentation and setup corporate login accounts. Learn more at: https://cloud.google.com/resource-manager/docs/organization-policy/restrictingdomains",
  },
  {
    name: "GCP:IAM-004",
    cloud: "GCP",
    risk: "medium",
    service: "ServiceAccount",
    description:
      "Ensure user-managed/external keys for service accounts are rotated every 90 days or less ",
    category: "Security",
    function: "Access Control",
    group: "Security",
    messageFail:
      "User-managed/external keys for service accounts are not rotated every 90 days or less ",
    messagePass:
      "User-managed/external keys for service accounts are rotated every 90 days or less  ",
    pageDetail:
      "Service Account keys consist of a key ID (Private_key_Id) and Private key, which are used to sign programmatic requests users make to Google cloud services accessible to that particular service account. It is recommended that all Service Account keys are regularly rotated.",
    RemediationSteps:
      "From Console: \n  Delete any external (user-managed) Service Account Key older than 90 days: \n  1. Go to APIs & ServicesCredentials using https://console.cloud.google.com/apis/credentials \n  2. In the Section Service Account Keys, for every external (user-managed) service account key where creation date is greater than or equal to the past 90 days, click Delete Bin Icon to Delete Service Account key. \n  Create a new external (user-managed) Service Account Key for a Service Account: \n  1. Go to APIs & ServicesCredentials using https://console.cloud.google.com/apis/credentials \n  2. Click Create Credentials and Select Service Account Key. \n  3. Choose the service account in the drop-down list for which an External (usermanaged) Service Account key needs to be created. \n  4. Select the desired key type format among JSON or P12. \n  5. Click Create. It will download the private key. Keep it safe. \n  6. Click Close if prompted. \n  7. The site will redirect to the APIs & ServicesCredentials page. Make a note of the new ID displayed in the Service account keys section.",
  },
  {
    name: "GCP:IAM-005",
    cloud: "GCP",
    risk: "high",
    service: "ServiceAccount",
    description:
      "Ensure that there are only GCP-managed service account keys for each service account",
    category: "Security",
    function: "Access Control",
    group: "Security",
    messageFail:
      "There are NON-GCP managed service account keys for each service account",
    messagePass:
      "There are only GCP-managed service account keys for each service account",
    pageDetail:
      "Anyone who has access to the keys will be able to access resources through the service account. GCP-managed keys are used by Cloud Platform services such as App Engine and Compute Engine. These keys cannot be downloaded. Google will keep the keys and automatically rotate them on an approximately weekly basis. User-managed keys are created, downloadable, and managed by users. They expire 10 years from creation.",
    RemediationSteps:
      "1. Go to the IAM page in the GCP Console using https://console.cloud.google.com/iam-admin/iam\n  2. In the left navigation pane, click Service accounts. All service accounts and their corresponding keys are listed.\n  3. Click the service account.\n  4. Click the edit and delete the keys.",
  },
  {
    name: "GCP:SQL-001",
    cloud: "GCP",
    risk: "high",
    service: "SQL",
    description:
      " Ensure that the Cloud SQL database instance requires all incoming connections to use SSL ",
    category: "Security",
    function: "Cryptography",
    group: "Encryption at Rest",
    messageFail:
      "Cloud SQL database instance does not require all incoming connections to use SSL  ",
    messagePass:
      " Cloud SQL database instance requires all incoming connections to use SSL ",
    pageDetail:
      "SQL database connections if successfully trapped (MITM); can reveal sensitive data like credentials, database queries, query outputs etc. For security, it is recommended to always use SSL encryption when connecting to your instance. This recommendation is applicable for Postgresql, MySql generation 1 and MySql generation 2 instances.",
    RemediationSteps:
      "From Console:\n    1. Go to https://console.cloud.google.com/sql/instances.\n    2. Click on an instance name to see its configuration overview.\n    3. In the left-side panel, select Connections.\n    4. In the SSL connections section, click Allow only SSL connections.\n    5. Under Configure SSL server certificates click Create new certificate.\n    6. Under Configure SSL client certificates click Create a client certificate.\n    7. Follow the instructions shown to learn how to connect to your instance.\n    \n    From Command Line:\n    To enforce SSL encryption for an instance run the command:\n    gcloud sql instances patch INSTANCE_NAME --require-ssl",
  },
  {
    name: "GCP:SQL-002",
    cloud: "GCP",
    risk: "high",
    service: "SQL",
    description:
      "Ensure that Cloud SQL database instances are not open to the world ",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: " Cloud SQL database instances are open to the world",
    messagePass: "Cloud SQL database instances are not open to the world ",
    pageDetail:
      "To minimize attack surface on a Database server instance, only trusted/known and required IP(s) should be white-listed to connect to it. An authorized network should not have IPs/networks configured to 0.0.0.0/0 which will allow access to the instance from anywhere in the world. Note that authorized networks apply only to instances with public IPs.",
    RemediationSteps:
      "From Console:\n    1. Go to the Cloud SQL Instances page in the Google Cloud Console by visiting\n    https://console.cloud.google.com/sql/instances.\n    2. Click the instance name to open its Instance details page.\n    3. Under the Configuration section click Edit configurations\n    4. Under Configuration options expand the Connectivity section.\n    5. Click the delete icon for the authorized network 0.0.0.0/0.\n    6. Click Save to update the instance.\n    \n    From Command Line:\n    Update the authorized network list by dropping off any addresses.\n    gcloud sql instances patch INSTANCE_NAME --authorizednetworks=IP_ADDR1,IP_ADDR2...\n    ",
  },
  {
    name: "GCP:SQL-003",
    cloud: "GCP",
    risk: "high",
    service: "SQL",
    description:
      " Ensure that Cloud SQL database instances do not have public IPs",
    category: "Security",
    function: "Access Control",
    group: "Networking",
    messageFail: " Cloud SQL database instances have public IPs",
    messagePass: " Cloud SQL database instances do not have public IPs",
    pageDetail:
      "It is recommended to configure Second Generation Sql instance to use private IPs instead of public IPs. To lower the organization's attack surface, Cloud SQL databases should not have public IPs. Private IPs provide improved network security and lower latency for your applicatio",
    RemediationSteps:
      "From Console:\n    1. Go to the Cloud SQL Instances page in the Google Cloud Console:\n    https://console.cloud.google.com/sql/instances\n    2. Click the instance name to open its Instance details page.\n    3. Select the Connections tab.\n    4. Deselect the Public IP checkbox.\n    5. Click Save to update the instance.\n    \n    From Command Line:\n    1. For every instance remove its public IP and assign a private IP instead:\n    gcloud beta sql instances patch INSTANCE_NAME --network=VPC_NETWOR_NAME --noassign-ip\n    2. Confirm the changes using the following command:\n    gcloud sql instances describe INSTANCE_NAME",
  },
  {
    name: "GCP:SQL-004",
    cloud: "GCP",
    risk: "high",
    service: "SQL",
    description:
      "Ensure that Cloud SQL database instances are configured with automated backups ",
    category: "Reliability",
    function: "Business Continuity Mngt (BCM)",
    group: "Performance",
    messageFail:
      "Cloud SQL database instances are not configured with automated backups",
    messagePass:
      " Cloud SQL database instances are configured with automated backups ",
    pageDetail:
      "Backups provide a way to restore a Cloud SQL instance to recover lost data or recover from a problem with that instance. Automated backups need to be set for any instance that contains data that should be protected from loss or damage. This recommendation is applicable for SQL Server, PostgreSql, MySql generation 1 and MySql generation 2 instances",
    RemediationSteps:
      "From Console:\n  1. Go to the Cloud SQL Instances page in the Google Cloud Console by visiting\n  https://console.cloud.google.com/sql/instances.\n  2. Select the instance where the backups need to be configured.\n  3. Click Edit.\n  4. In the Backups section, check 'Enable automated backups', and choose a backup\n  window.\n  5. Click Save.\n  \n  From Command Line:\n  1. List all Cloud SQL database instances using the following command:\n  gcloud sql instances list\n  2. Enable Automated backups for every Cloud SQL database instance using the below\n  command:\n  gcloud sql instances patch INSTANCE_NAME --backup-start-time [HH:MM]\n  ",
  },
  {
    name: "FBS:ST-001",
    cloud: "GCP",
    risk: "High",
    service: "storage",
    description:
      "Ensure that Storage bucket is not anonymously or publicly accessible",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail: " Storage bucket is anonymously or publicly accessible",
    messagePass: " Storage bucket is not anonymously or publicly accessible",
    pageDetail:
      "You control who has access to your Cloud Storage buckets and objects and what level of access they have. Use Firebase Security Rules to provide granular, attribute-based access control to mobile and web apps using the Firebase SDKs for Cloud Storage.",
    RemediationSteps:
      '"1. Go to Google Cloud console: https://console.cloud.google.com/storage/.\n  2. Select Storage on the navigation bar.\n  3. Select Bucket for which the global permissions are open.\n  4. Click on ""Edit Bucket Permissions"".\n  5. Remove Admin level Role/Memebers from the buckets & click save. "',
  },
  {
    name: "FBS:ST-002",
    cloud: "GCP",
    risk: "Medium",
    service: "storage",
    description:
      "Ensure that Storage buckets have uniform bucket-level access enabled",
    category: "Security",
    function: "Access Control",
    group: "IAM",
    messageFail:
      "Storage buckets do not have uniform bucket-level access enabled",
    messagePass: "Storage buckets have uniform bucket-level access enabled",
    pageDetail:
      "Uniform bucket-level access allows you to use Cloud Identity and Access Management (Cloud IAM) alone to manage permissions. Cloud IAM applies permissions to all the objects contained inside the bucket or groups of objects with common name prefixes. Once you enable uniform bucket-level access, you have 90 days to switch back to fine-grained access before uniform bucket-level access becomes permanent.",
    RemediationSteps:
      '"1. Go to Google Cloud console: https://console.cloud.google.com/storage/.\n    2. Select Storage on the navigation bar.\n    3. Select Bucket for which the global permissions are open.\n    4. Click on Bucket setting and check mark uniform bucket-level access to enabled .\n    5. Now save updated setting by clicking on save. "',
  },
]
