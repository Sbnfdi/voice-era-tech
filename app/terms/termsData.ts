// Voice Era Tech LLC - Master Terms and Conditions of Service Data
// Updated to ensure 100% compliance with telecom service provisions, TCPA/FCC/STIR:SHAKEN regulations, and server infrastructure policies.

export interface TermSection {
  id: string;
  number: string;
  title: string;
  category: string;
  paragraphs: string[];
}

export const TERMS_CATEGORIES = [
  "All",
  "Introduction & Scope",
  "Service Agreements",
  "Billing & Commercial",
  "Compliance & Usage",
  "Liability & Governance",
  "Data & Privacy",
  "Customer Declarations"
] as const;

export const TERMS_SECTIONS: TermSection[] = [
  {
    "id": "section-1",
    "number": "Preamble",
    "title": "Terms of Service Agreement & Parties",
    "category": "Introduction & Scope",
    "paragraphs": [
      "These terms and conditions (“Conditions”) shall govern the agreement between Voice Era Tech (“us” or “we”) and the individual or organisation applying for the provision of the Goods or Services (“you”). Voice Era Tech (“US, We, Voice Era Tech”) on behalf of itself and its affiliates, a Partnership whose registered office is at 1209 Orange Street, Wilmington, DE 19801, USA You can contact us by email on support@voiceeratech.com or by telephone on +1 (512) 333-2777. We explain in the headings what each clause covers. These headings are for general guidance only and are not intended to be legally binding. Please seek independent legal advice if you require further clarification.",
      "a) Voice Era Tech includes Voice Era Tech, Voice Era Tech LLC and its telecom operating affiliates its affiliates, agents and partners and may be commonly referred to as “Voice Era Tech”, “We”, “Us”, or “Our”.",
      "b) Customers including their agents, employees and authorised representatives shall be commonly referred to as the “Customer” or “Subscriber”, whether in singular or plural, and gender neutral, but may also be addressed as “You”, and “Yours”.",
      "c) These Conditions take precedence over the Website content and material."
    ]
  },
  {
    "id": "section-2",
    "number": "General",
    "title": "Interpretations & Meanings",
    "category": "Introduction & Scope",
    "paragraphs": [
      "(i) “Agreement” means the General Terms and the Specific Terms applicable to the Services which you have chosen together with any other documents referred to herein.",
      "(ii) “Cancellation Period” means the minimum period in which You may terminate the contract without incurring obligations and/or associated charges as set out under the terms of this agreement.",
      "(iii) “Data” includes information, documents, text, software, music, sound, photography, messages, and other material of any kind in any form.",
      "(iv) “Goods” means the goods described on the Website and which we agree to sell to you.",
      "(v) “Internet” means the global data network comprising interconnected networks to which we are connected and provide access to you via the Services.",
      "(vi) “Minimum Period” means the charges and fees levied by Voice Era Tech to You for the supply of Services for an initial period of time starting from the Start Date for the relevant Service. These charges apply regardless of whether you terminate the Agreement prior to the expiration of that period and will continue to accrue and become due by You for the remainder of that Period.",
      "(vii) “Personal Data” means Data about any identified or identifiable living person as defined by the Data Protection Act.",
      "(viii) “Regulations” includes, but is not limited to the Consumer Protection (Distance Selling) Regulations 2000.",
      "(ix) “Services” means the services described on the Website (including access to the Website) and which we agree to provide to You.",
      "(x) “Start Date” means when either",
      "(i) We have sent you confirmation by email We have activated the Service(s), or",
      "(ii) when You first start to use the Service(s), whichever is the sooner.",
      "(xi) “Website” means our internet presence at www.voiceeratech.com and any other locations we advertise from time to time, whether or not you have been aware of the same."
    ]
  },
  {
    "id": "section-3",
    "number": "1",
    "title": "1. Term and Termination",
    "category": "Service Agreements",
    "paragraphs": [
      "1.1. The term of this Agreement shall commence from the Effective Date and shall continue in full effect until either party cancels the agreement.",
      "1.2. Either Party may terminate this Agreement at any time for convenience by giving the other Part a minimum of 30 days written notice.",
      "1.3. If any SOWs are still in effect after the 30 days termination notice then the terms of the agreement will remain in effect until the expiry date of the latest applicable SOW."
    ]
  },
  {
    "id": "section-4",
    "number": "2",
    "title": "2. Statements of Work (SOW)",
    "category": "Service Agreements",
    "paragraphs": [
      "2.1. A SOW can be modified through a change request which is effective once executed by both Parties.",
      "2.2. You may add or remove individual services or amend the level of support by giving 30 days prior written notice to Us. Any credits resulting from the changes to the SOW will be pro-rated from the date of the effective change based on a 30-day month.",
      "2.3. The term of the applicable SOW shall commence from the agreed start date and conclude on the agreed end dated as stated in the SOW. Subject to clauses 2.1 and 2.2 changes can be made to the applicable SOW but there is no early termination of the whole SOW except for breach of contract."
    ]
  },
  {
    "id": "section-5",
    "number": "3",
    "title": "3. Fees, Billing and Payment Methods",
    "category": "Billing & Commercial",
    "paragraphs": [
      "3.1. You must pay the fees (together with VAT and any applicable taxes) when you order Goods or order or renew any Services.",
      "3.2. All call rates shall be rounded up to the nearest fraction of a US Dollar Cent.",
      "3.3. Payment for Goods may be made:",
      "(i) By Direct Debit, Cheque, ACH, Credit or Debit Card, Wire, USDT, Wise, Paypal and",
      "(ii) In advance, or, if we agree to credit terms, within 7 (seven) days of receipt of our invoice.",
      "3.4. Payment for the Services may be made:",
      "(i) Annually in advance, or, if we agree to credit terms, within 7 (seven) days of receipt of our invoice bAy Direct Debit, Cheque, ACH, Credit or Debit Card, Wire, USDT, Wise, Paypal",
      "3.5. Payment must be made without deduction or set-off.",
      "3.6. All fees are non-refundable unless otherwise agreed in writing with Us.",
      "3.7. All fees remain payable, should we suspend the Services in accordance with these Conditions.",
      "3.8. We may impose a credit limit on your account and/or require a security deposit towards accrued bills.",
      "3.9. For the avoidance of doubt, Services purchased which are subject to advanced payment and not cancelled within the Cancellation Period are not refundable under any circumstances. In such an event, the associated monies shall be used by Us to discharge our administrative expenses arising out of the termination of the Agreement."
    ]
  },
  {
    "id": "section-6",
    "number": "4",
    "title": "4. Non-Payment of Services & Suspension",
    "category": "Billing & Commercial",
    "paragraphs": [
      "4.1. Voice Era Tech reserves the right to discontinue your Services and delete your account, if you fail to pay for any such Services within the required timeframe under these Conditions.",
      "4.2. When you purchase Services from us, you will receive a welcome email and an accompanying invoice on that date (the ‘Purchase Date’). Payment for all purchased Services is due within 7 (seven) calendar days of that Purchase Date. Like all Communications Providers, we request and appreciate prompt payment from our customers.",
      "4.3. If you do not make payment within that time, the payment will be classed as overdue. Once the payment is overdue by 2 (two) calendar days, we will notify you by email you (any emails sent will be to your nominated email account) of this fact and invite you to make payment as soon as possible. From then on, we will email you with payment reminders every 2 (two) calendar days unless and until payment is made.",
      "4.4. If payment is still not received within 7 (seven) calendar days of the due date, then your account and the Services will be placed on hold and will not be usable. This means you will be unable to use the internet or make telephone calls using the Services provided by Voice Era Tech.",
      "4.5. If payment is still not received within 14 (fourteen) days of the Purchase Date, your account will be deleted and all Services will be incapable of reactivation.",
      "4.6. If full payment is not made within our terms, collection will be passed to our third-party debt recovery specialists where a charge of 15% plus vat will be incurred on the unpaid amount. Additionally, Statutory Interest will also be applied to the unpaid amount.",
      "4.7. Any fraud or other improper or unlawful use of the Services shall not discharge You of Your payment obligations to Voice Era Tech, so long as those calls originated from Your authorised equipment."
    ]
  },
  {
    "id": "section-7",
    "number": "5",
    "title": "5. Telephony Services & Emergency Calling (911/999/112)",
    "category": "Service Agreements",
    "paragraphs": [
      "5.1. We will exercise due care and diligence in execution of our duties under the terms of this Agreement.",
      "5.2. However, we do not guarantee:5.",
      "2.1 that the Services you have subscribed to will be uninterrupted, secure or error-free; or 5.",
      "2.2 That any Data generated, stored, transmitted or used via or in connection with the Services will be complete, accurate, secure, up to date, received or delivered correctly or at all.",
      "5.3. We do not provide a back-up of your Data, or guarantee the integrity of your Data; however, we will use our reasonable endeavours to provide copies of Data for disaster recovery purposes only.",
      "5.4. We may have to suspend the Services for emergency repairs or updates without prior notice. If so, we will restore them as quickly as is reasonably practicable. For all routine or scheduled repairs, maintenance or improvement we will provide reasonable prior notice.",
      "5.5. Specific Conditions on the Provision of Telephony Services and Emergency Calls – By purchasing our Telephony Services (VoIP) you confirm that you understand that our services: 5.",
      "5.1 May not offer all the features you may expect from a conventional land telephone phone line.",
      "5.5.2 May, at times be unavailable due to circumstances beyond our control a result of things over which we have no control, for example, the weather, power disruptions and failures of your internet service provider (ISP) or broadband connection and you understand that in such circumstances all services (including 911/999/112 public emergency call services) will also be unavailable.",
      "5.5.3 The use of a third-party router and broadband service when used in conjunction with Voice Era Tech VoIP Goods and Services may impact the connectivity, quality, reliability, robustness and stability of service that is ordinarily available and expected of your Service package. Since Voice Era Tech is unable to assist with third party broadband services, we always recommend customers subscribe to our broadband package. This ensures maximum throughput and minimal downtime.",
      "5.5.4 Connectivity to the public emergency services is subject to 5.",
      "5.2 above and, the phone number and location details will be provided only to the extent that is technically feasible. As a result, you may have to provide your location information and phone number verbally to the operator.",
      "5.5.5 Note, where you use Voice Era Tech VoIP service outside of the United States and standard domestic jurisdictions, you may not be connected to the domestic emergency services upon dialling the appropriate emergency number. 5.",
      "5.6 For each VoIP extension or trunk that you utilise, you must register with Us the physical location where you will be using the Service. Your initial location will be registered as a part of subscribing to Voice Era Tech Services. It is your responsibility to maintain the accuracy of your location address via email to support@voiceeratech.com if there are any changes. If you do not update us with changes, it may or may not be possible for the emergency operators and authorities to identify your location and phone number when you dial 999/112. When you dial 999/112 you will need to state your location and phone number promptly and clearly, as the emergency operators and authorities may not readily have access to this information. 5.",
      "5.7 The emergency operators and authorities may or may not be able to identify your phone number to call You back, if the call is unable to be completed, is dropped, is otherwise disconnected, or if You are unable to speak to tell them your phone number and/or if the Service is not operational for any reason. The emergency operators and authorities may also not be able to hold your line open if You hang up. 5.",
      "5.8 You agree to inform potential users of the Services of the above limitations, and You understand and accept you should always have an alternative means of accessing 911/999/112 emergency services. In the event that you do not have any remaining credit on your Voice Era Tech account, Voice Era Tech will attempt to assist you in being able to make 911, 999 and 112 calls. 5.",
      "5.9 Should Voice Era Tech suspend or terminate the Service, then You may NOT be able to dial 911, 999 or 112 calls."
    ]
  },
  {
    "id": "section-8",
    "number": "6",
    "title": "6. Service Scope Exclusions",
    "category": "Service Agreements",
    "paragraphs": [
      "6.1. Data management – We cannot upload, manipulate or manage data. We will train and instruct the customer on these actions only .",
      "6.2. Hardware management – We are not responsible for nor can we advise on any hardware issues, faults or requirements for hardware not supplied by Voice Era Tech .",
      "6.3. Training of end users – Voice Era Tech will work with customers to ensure training is delivered to relevant admins via direct 1-2-1 sessions; and for end users via ‘train the trainer’ sessions delivered to managers or supervisors. Unless otherwise agreed Voice Era Tech will not be responsible for direct training of end users.",
      "6.4. CLI management – Voice Era Tech can provision CLIs at the customers request (SLA applicable) and will set, test and whitelist as appropriate and directed in the request. We do not check CLI sentiment ratings, or audit numbers.",
      "6.5. Softphones – A setup procedure covered in training but BAU is for Customer to setup as required .",
      "6.6. Whitelisting home worker IPs – Another item covered in training, BAU is for customer to setup as required ."
    ]
  },
  {
    "id": "section-9",
    "number": "7",
    "title": "7. Customer Requirements, Security & Anti-Robocalling",
    "category": "Compliance & Usage",
    "paragraphs": [
      "7.1. Security: you are required to 7.",
      "1.1 Securely store your username and password, though we may reset these at your request, or in the event of a security breach. 7.",
      "1.2 If requested, confirm your username and password (to identify yourself) when giving instructions (and we are authorised to comply with instructions containing your username and password). 7.",
      "1.3 Take all reasonable steps in respect of matters in your control to minimize any risk of security breaches in connection with the Services. 7.",
      "1.4 Promptly notify us (24 hours) of any unauthorised access to your account you believe may affect the overall security of our systems. To be eligible for Our service there are number of checks that need to be satisfied which include but are not limited to; geographical coverage, credit checks, adequacy of telephone line(s), internet connection(s), and an activation check .",
      "7.2. Your obligations 7.",
      "2.1 You must promptly comply with our instructions and requests concerning the Services you have subscribed to. 7.",
      "2.2 You must provide us with up-to-date contact details of nominated representatives with whom we are authorised to deal (including email addresses) and promptly notify us of any changes or substitutions. 7.",
      "2.3 You are responsible for the actions of anyone who uses your username and password to access the Services, whether authorised or not, unless, in the unlikely event he or she is acting on our behalf, in which case, we will give you prior notice of the same. 7.",
      "2.4 As a technology reliant device, there is a risk that Data generated, stored, transmitted or used via, or in connection with the Services may be irretrievably damaged, or lost, if there is a fault, or on suspension or termination. It is your responsibility to ensure you regularly back-up all such Data that you wish to save. By entering into this agreement, you discharge Voice Era Tech of any liability, consequential, or otherwise, pertaining to the storage, loss, retrieval, or any other manner of data processing activity undertaken. 7.",
      "2.5 You will not use the Services, nor permit your end users to use the Services, for autodialing from a database of numbers for purposes of telemarketing without having received written permission from the called parties (“Illegal Robocalling”). Calls to wireline numbers for purposes of political campaigning, market research or polling will be deemed legal. 7.",
      "2.6 Numbers purchased from Voice Era Tech may only be used for caller line identity (CLI) purposes on calls made via Voice Era Tech network. In the event the CLI is presented via an alternative network without prior authorisation we reserve the right to terminate all services. 7.",
      "2.7 Voice Era Tech will, at our discretion, operate a whitelisting process which involves checking any number used for CLI purposes are dialable with valid inbound/ IVR and an opt-out option, if not we reject those numbers from our network. Without being whitelisted we do not allow the customer’s numbers to be used as a CLIs for any outbound calls through our network. 7.",
      "2.8 Failure to uphold these conditions can result in us suspending or terminating services."
    ]
  },
  {
    "id": "section-10",
    "number": "8",
    "title": "8. Right to Cancel & Return Policy",
    "category": "Billing & Commercial",
    "paragraphs": [
      "8.1. For the purposes of any Regulations: 8.",
      "1.1 The supplier shall be Voice Era Tech. 8.",
      "1.2 The supplier’s address for service shall be the correspondence address as set out in clause 25.1. 8.",
      "1.3 Whilst every effort is made to ensure prices are correct at the point at which the consumer places an order, our prices are updated periodically and cannot be guaranteed for any period of time 8.",
      "1.4 Any expression of dissatisfaction, whether or not substantiated, must be sent in writing to the supplier’s correspondence address stated.",
      "8.2. A customer will, subject to any exceptions or exclusions set out in the Regulations, be entitled to cancel this Agreement by serving a written notice of cancellation on us at any time during the following Cancellation Periods: 8.",
      "2.1 In the case of Goods, within 7 (seven) working days following the date of receipt of goods. 8.",
      "2.2 In the case of Services, within 7 (seven) working days of entering in a contract with us.",
      "8.3. In the event of cancellation by the customer, Goods should be returned to the supplier’s correspondence address. The customer will be liable for the costs of returning such Goods or the costs of the supplier in recovering such Goods unless the customer has a right to reject the Goods under a term of these Conditions or under statutory right (including any right under the Unfair Terms in Consumer Contract Regulations [UTCCR]).",
      "8.4. The customer will not be entitled to cancel this contract for the supply of Services once the performance of the Services has begun.",
      "8.5. Please note that we may commence certain Services, such as provision telephone numbers or setting up dedicated hosted servers, within 24 hours after you place your order."
    ]
  },
  {
    "id": "section-11",
    "number": "9",
    "title": "9. Termination for Cause & Breach",
    "category": "Liability & Governance",
    "paragraphs": [
      "9.1. We may terminate this agreement (as regards some or all of the Services) or suspend some or all of the Services immediately on written notice.",
      "9.2. If you breach any of the terms and obligations under these Conditions and, if remediable, having received from us a written notice stating the intention to terminate these conditions if not remedied, fail to remedy the breach within 14 (fourteen) days.",
      "9.3. If you are subject to a resolution for winding up or a petition for bankruptcy or liquidation or there is a proposal or you enter into any arrangement or composition with your or for your creditors or a receiver or liquidator or trustee in bankruptcy is appointed over you or any of your assets or any similar circumstances; or.",
      "9.4. If we are required to undergo a similar course of action by a competent or regulatory authority.",
      "9.5. On termination of this agreement, or suspension of Services for any reason.",
      "9.6. We will immediately stop supplying, and will terminate access to, all relevant Services you have subscribed to. This may involve irretrievable damage to or loss of Data generated, stored, transmitted or used via, or in connection with the Services and/or we may destroy any such Data entirely at our discretion and without any liability, or obligation, financial, or consequential loss whatsoever.",
      "9.7. All licenses granted by us to you will terminate.",
      "9.8. Any fees due, will remain payable and, if already paid, will be non-refundable, unless you have cancelled this agreement in accordance with the termination process.",
      "9.9. Your accrued rights and liabilities will be unaffected."
    ]
  },
  {
    "id": "section-12",
    "number": "10",
    "title": "10. User Warning & Regulatory Accountability",
    "category": "Liability & Governance",
    "paragraphs": [
      "10.1. Any breach of our terms and conditions, your obligations, usage and our limitations of liability, will lead to the immediate termination and withdrawal of our services without further notice..",
      "10.2. Voice Era Tech’s responsibilities do not render it accountable or responsible as a data controller as defined under Directive 95/46/EC [DPA 1998]and Regulation (EU) 2016/679 [GDPR].",
      "10.3. Voice Era Tech does not process data from your campaigns, save for its limited provision at the request of a law enforcement agency or regulatory body to assist in their investigation of a system or service abuse or misuse."
    ]
  },
  {
    "id": "section-13",
    "number": "11",
    "title": "11. Prohibited Activities & Usage Restrictions",
    "category": "Compliance & Usage",
    "paragraphs": [
      "11.1. You must refrain from transferring any illegal material or engage in unlawful activities via your use of the Services.",
      "You must refrain from sending menacing, offensive, defamatory, obscene, indecent or abusive messages or telephone calls whilst using the Services.",
      "11.3. You must not use or permit the usage of the Services in a manner that is inconsistent with any and all applicable laws and regulations.",
      "11.4. You must not make available or upload Data via your use of the Services that contain a virus, worm, trojan or other malicious Data or download any disabling or harmful devices.",
      "11.5. You must not use the Services to send bulk unsolicited commercial emails or telephone calls.",
      "11.6. You warrant that your use of the Services will not infringe any third-party intellectual property or other rights."
    ]
  },
  {
    "id": "section-14",
    "number": "12",
    "title": "12. Business to Business (B2B) Contact Rules",
    "category": "Compliance & Usage",
    "paragraphs": [
      "12.1. This information provided is not intended to replace the responsibility of the subscriber to verify the legal requirements pertaining to your call campaign prior to using Voice Era Tech’s services. The subscribing customer is ultimately responsible for their own informed decisions regarding their call campaign.",
      "12.2. In any event, a customer disagrees with or refuses to adhere or comply with any aspect of these terms and conditions, then they must immediately discontinue use of Voice Era Tech service and close the browser session by clicking the cross at the top right-hand corner. If a customer does not intend to adhere to the responsible use of service, then they must not use the services provided by Voice Era Tech."
    ]
  },
  {
    "id": "section-15",
    "number": "13",
    "title": "13. Acceptable and Responsible Use Agreement (AUP)",
    "category": "Compliance & Usage",
    "paragraphs": [
      "13.1. The Customer.",
      "13.2. Is responsible to ensure they familiarise themselves with any local, national or other legal requirements and restrictions applicable within the jurisdiction of their operations.",
      "13.3. Agrees to immediately place any individual requesting DNC status, on their respective lists to facilitate the suppression of further calls unless the Customer has provided explicit consent to the contrary.",
      "13.4. Agrees to provide legal contact information during any outbound campaign within the initial greeting message.",
      "13.5. Agrees to record their own sound files for all outbound campaigns.",
      "13.6. Agrees to responsibly dial each campaign with courtesy to the recipients for which it is meant.",
      "13.7. Agrees to schedule campaigns responsibly as previously described in 32.4 above.",
      "13.8. Agrees not to send any calls to life-line services, such as hospitals, fire, police, ambulance, military, or utility related telephone numbers.",
      "13.9. Agrees to not send any sales outbound broadcasts to recipients that have not consented to receive such a broadcast or SMS.",
      "13.10. Agrees to always use a DNC or opt-out features made available to them through Voice Era Tech Service.",
      "13.11. Should seek independent legal advice before dialling any data for which the customer is unfamiliar, or if the legalities of dialling remain unclear to the Customer."
    ]
  },
  {
    "id": "section-16",
    "number": "14",
    "title": "14. Customer Indemnification & Hold Harmless",
    "category": "Liability & Governance",
    "paragraphs": [
      "14.1. The Customer will indemnify us against all claims, damages, liabilities, costs (including reasonable legal fees) directly or indirectly related to use of the Goods, your use of the Services or breach by you of these Conditions.",
      "14.2. The Customer will indemnify Voice Era Tech for any liability in respect of any failure of performance due to causes beyond its control, including, but not limited to, acts of God, fires, floods or other catastrophes; national emergencies, insurrections, riots or wars, acts of terrorism, strikes, lockouts, work stoppages or other labour difficulties; and any law, order, regulation or other action of any governing authority or agency thereof; or the delayed installation of its facilities or commencement of service contract.",
      "14.3. For the duration of this agreement, and limited by statute, the Customer will indemnify Voice Era Tech for any liability against for direct, indirect, special, consequential, exemplary, punitive, or any other loss or damage, including, but not limited to lost profits (irrespective whether or not Voice Era Tech has made such a discovery itself, or whether the Customer has advised Voice Era Tech of the possibility of any such loss or damages) by reason of any act or omission in its performance under these terms and conditions.",
      "14.4. Voice Era Tech will be indemnified, defended, and held harmless by the Customer against any and all claims for loss or damages arising from the use of any service provided by Voice Era Tech. Such indemnity includes any allegations or claims for libel, slander, invasion of privacy, or infringement of copyright arising out of the material, data, information, or other content transmitted via the service provided by Voice Era Tech, and all other allegations and claims arising out of any intentional or unintentional act or omission by the Customer or any other party authorised by the Customer in the use of the service, in connection with this or any other service provided by Voice Era Tech.",
      "14.5. The Customer will indemnify Voice Era Tech in respect of any liability for any act or omission of any other company or companies furnishing a portion of the service, or from any act or omission of a third-party, including those vendors participating in Voice Era Tech’s offerings made to the Customer, or for damages associated with the service, equipment that it does not furnish, or for any damages that result from the operation of the Customer’s provided systems, equipment, facilities, or services that are interconnected with Voice Era Tech’s services.",
      "14.6. The Customer acknowledges that Voice Era Tech may release the IP address and any other personal information for use by law enforcement and regulatory body to assist in their investigation of a system or service abuse or misuse.",
      "14.7. The Customer must ensure they understand the implications following the use of any numbers that have been selected to be uploaded to its campaigns.",
      "14.8. Following the upload of any data, the Customer confirms that they will assume full liability for its use.",
      "14.9. The Customer understands and accepts the necessity to screen any data against the respective (opt-out) National DNC List (including, but not limited to the TPS, CTPS,TCPA and NDNCR) and conform to applicable legal requirements within the country of jurisdiction prior to its upload and use.",
      "14.10. The Customer understands and accepts the necessity to screen any data against its own Do Not Call (“DNC”) lists.",
      "14.11. The Customer will indemnify Voice Era Tech against any action arising as a consequence of its failure under the terms stated above.",
      "14.12. The Customer takes and accepts full liability and legal responsibility following the use and consequences of any data that has been uploaded."
    ]
  },
  {
    "id": "section-17",
    "number": "15",
    "title": "15. Limitation of Liability & Warranty Disclaimers",
    "category": "Liability & Governance",
    "paragraphs": [
      "15.1. Voice Era Tech TOTAL LIABILITY FOR ANY CLAIM IN RELATION TO THIS AGREEMENT AND SOW SHALL BE LIMITED TO DIRECT LOSSES IN CONTRACT CAUSED BY Voice Era Tech AND SHALL BE LIMITED TO 100% OF FEES PAID BY THE CUSTOMER UNDER THE APPLICABLE SOW IN THE PRECEDING 12 MONTHS.",
      "15.2. IN NO EVENT (INCLUDING OUR OWN NEGLIGENCE), AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSSES, WILL WE BE LIABLE FOR ANY: 15.",
      "2.1 ECONOMIC LOSS (INCLUDING, WITHOUT LIMITATION, LOSS OF REVENUE, PROFIT, CONTRACT, BUSINESS OR ANTICIPATED SAVINGS). 15.",
      "2.2 LOSS OF GOODWILL OR REPUTATION. 15.",
      "2.3 SPECIAL, INDIRECT OR CONSEQUENTIAL LOSS",
      "15.3. Voice Era Tech makes no implied or express representations or warranties pertaining to the performance of its services, and disclaims any implied warranties, including, but not limited to, warranties, implied warranties, merchantability, or fitness for purpose for a particular purpose, use or non-infringement.",
      "15.4. Voice Era Tech does not authorise any other party acting on its behalf, to make a warranty on behalf of Voice Era Tech. As such, the Customer is precluded from relying on any such statement as a warranty by Voice Era Tech."
    ]
  },
  {
    "id": "section-18",
    "number": "16",
    "title": "16. Fraud Prevention & Network Terms of Use",
    "category": "Compliance & Usage",
    "paragraphs": [
      "16.1. You shall indemnify and hold Voice Era Tech harmless from all costs, expenses, claims or actions arising from fraudulent calls of any nature which may comprise a portion of the Services to the extent that the party claiming the call(s) in question to be fraudulent is (or had been at the time of the call) an End User of the Services through You or an End User of the Service through Your distribution channels.",
      "16.2. You shall not be excused from paying Voice Era Tech for the Services provided to You or any portion thereof on the basis that fraudulent calls comprised a corresponding portion of the Services. In the event Voice Era Tech discovers fraudulent calls being made (or reasonably believes fraudulent calls are being made), nothing contained herein shall prohibit Voice Era Tech from taking immediate action (without notice to You) that is reasonably necessary to prevent such fraudulent calls from taking place, including without limitation, denying Services to You or terminating the Service to or from specific locations. Voice Era Tech shall not, however, have any obligation to monitor the Service or take any action to detect fraudulent calls.",
      "16.3. Voice Era Tech shall be entitled at any time to request, and You shall be obliged to promptly provide such information as Voice Era Tech may reasonably require in order to establish to its reasonable satisfaction that You are discharging your obligations under this Agreement. Voice Era Tech shall be entitled to pass such information (or any part thereof) or any knowledge it may have of Yours or any suspected illegal or criminal activity to any Regulation Authority whether the information is requested by them or not.",
      "16.4. You shall throughout the term of this Agreement fully indemnify and keep Voice Era Tech and all members servants’ officers and agents of Voice Era Tech fully and effectively indemnified against all liabilities damages expenses and costs to, and actions proceedings claims and demands whatsoever by third parties arising directly or indirectly out of or in consequence of any breach of this Agreement by You.",
      "16.5. You will comply (and will ensure that Your officers, employees, contractors and agents comply) at all times with any and all regulations relating to the use of any products or services provided by Voice Era Tech."
    ]
  },
  {
    "id": "section-19",
    "number": "17",
    "title": "17. Confidentiality & Non-Disclosure",
    "category": "Data & Privacy",
    "paragraphs": [
      "17.1. We both agree not to use for any purpose, apart from this agreement, or disclose any Confidential Data received from the other party. [“Confidential Data” means Data identified as, or which clearly is, confidential.",
      "17.2. This clause does not apply to Data which:",
      "17.3. Enters the public domain, other than through breach of this clause.",
      "17.4. Is or becomes independently known to the receiving party, free from any confidentiality restriction.",
      "17.5. Is required to be disclosed by any applicable law, or competent authority.",
      "17.6. Is reasonably disclosed to employees, suppliers, or others for the proper performance of these Conditions.",
      "17.7. Is reasonably disclosed to professional advisers; or",
      "17.8. If we are otherwise permitted to disclose in accordance with these Conditions"
    ]
  },
  {
    "id": "section-20",
    "number": "18",
    "title": "18. Lawful Intercept & Regulatory Data Access",
    "category": "Data & Privacy",
    "paragraphs": [
      "18.1. We may, at our discretion, access, copy, preserve, disclose, remove, suspend or delete any Data:",
      "18.2. If we are required to do so by applicable law or competent authority; or",
      "18.3. If it is otherwise permitted under these Conditions; or",
      "18.4. If such Data is prohibited under these Conditions."
    ]
  },
  {
    "id": "section-21",
    "number": "19",
    "title": "19. Personal Data & Privacy Policy",
    "category": "Data & Privacy",
    "paragraphs": [
      "19.1. We will only process your Personal Data only in compliance with our privacy policy.",
      "19.2. With your explicit and unequivocal consent to such processing."
    ]
  },
  {
    "id": "section-22",
    "number": "20",
    "title": "20. Data Retention Policies",
    "category": "Data & Privacy",
    "paragraphs": [
      "20.1. All Personal Data is retained, and otherwise handled in a manner fully compliant with principle 5 of the Data Protection Act 1998.",
      "20.2. Personal Data which is retained by Voice Era Tech.",
      "20.3. In relation to VoIP Services provided by Voice Era Tech, We may store voicemail, call recordings, call data records, invite logs, invoices and received faxes."
    ]
  },
  {
    "id": "section-23",
    "number": "21",
    "title": "21. Retention Periods for Call Records & Media",
    "category": "Data & Privacy",
    "paragraphs": [
      "21.1. Call records may be retained for 12 (twelve) months – voicemail, voicemail for old and new customers, received faxes and call recordings may all be kept for a period of 6 months."
    ]
  },
  {
    "id": "section-24",
    "number": "22",
    "title": "22. Loss of Data & Third-Party Exclusion",
    "category": "Liability & Governance",
    "paragraphs": [
      "22.1. We have no liability for goods and services provided by third parties.",
      "22.2. To the extent allowed by law, we exclude all conditions, terms, representations and warranties, whether imposed by statute or by law or otherwise, that are not expressly stated in these Conditions including, without limit, the implied warranties of satisfactory quality and fitness for a particular purpose. Consumers’ statutory rights are unaffected."
    ]
  },
  {
    "id": "section-25",
    "number": "23",
    "title": "23. General Legal Provisions & Governing Law",
    "category": "Liability & Governance",
    "paragraphs": [
      "23.1. These Conditions represent the entire agreement of the parties relating to its subject matter. It supersedes all prior agreements and representations (unless fraudulent) and you acknowledge that that no reliance is placed on any representation made but not embodied in these Conditions, save for those made fraudulently. We are not bound by, nor should you rely on, any oral representations or representations by any agent or employee of any third party you may use to apply for our Services.",
      "23.2. If any part of these Conditions is deemed void for any reason, the offending words shall be deemed deleted and the remainder shall continue in full force.",
      "23.3. You may not assign these Conditions or subcontract or resell any of the Services without our prior written consent. We may assign these Conditions or subcontract any of the Services.",
      "23.4. We shall not be liable for failure to perform or delay in performing any obligation under these Conditions if the failure or delay is caused by any circumstances beyond our reasonable control, including but not limited to failure of any communications, telecommunications or computer system.",
      "23.5. No firm, person or company which is not a party to these Conditions shall have any right under the Contract (Rights of Third Parties) Act 1999 to enforce any provision of these Conditions. The failure to exercise or delay in exercising a right or remedy under these Conditions shall not constitute a waiver of the right or remedy.",
      "23.6. Nothing in these Conditions shall be construed as creating a partnership or joint venture of any kind between us.",
      "23.7. This Agreement shall be governed by the laws of the State of Delaware and applicable United States federal telecommunications law, and both parties agree that the state and federal courts located in the State of Delaware, USA will have exclusive jurisdiction."
    ]
  },
  {
    "id": "section-26",
    "number": "24",
    "title": "24. Formal Notices & Official Communications",
    "category": "Liability & Governance",
    "paragraphs": [
      "24.1. Notice to Voice Era Tech will be given in writing addressed to FAO: Voice Era Tech 1209 Orange Street, Wilmington, DE 19801, USA",
      "24.2. We shall send any notices in accordance with the most recent contact information (and transmission means) which you have provided to us.",
      "24.3. Notices may be sent by hand, recorded delivery, fax or email and shall be deemed to be received:",
      "24.4. By hand – when delivered provided handed to a senior employee.",
      "24.5. Recorded delivery – 5 (five) days after posting.",
      "24.6. Fax – when the sender receives an error-free transmission report; or",
      "24.7. Email – on the day sent unless the contrary is proved."
    ]
  },
  {
    "id": "section-27",
    "number": "25",
    "title": "25. Contractual Definitions",
    "category": "Introduction & Scope",
    "paragraphs": [
      "The following have particular meanings in this Agreement: “Agreement” means the General Terms and the Specific Terms applicable to the Services which you have chosen together with any other documents referred to herein.“Cancellation Period” means the minimum period in which You may terminate the contract without incurring obligations and/or associated charges as set out under the terms of this agreement.“Data” includes information, documents, text, software, music, sound, photography, messages, and other material of any kind in any form.“Effective Date” means the date from which both parties have signed the agreement.“SOW” means scope of work.“Goods” means the goods described on the Website and which we agree to sell to you.“Internet” means the global data network comprising interconnected networks to which we are connected and provide access to you via the Services.“Minimum Period” means the charges and fees levied by Voice Era Tech to You for the supply of Services for an initial period of time starting from the Start Date for the relevant Service. These charges apply regardless of whether you terminate the Agreement prior to the expiration of that period and will continue to accrue and become due by You for the remainder of that Period.“Personal Data” means Data about any identified or identifiable living person as defined by the Data Protection Act.“Regulations” includes, but is not limited to the Consumer Protection (Distance Selling) Regulations 2000.“Services” means the services described on the Website (including access to the Website) and which we agree to provide to You.“Start Date” means when either",
      "(i) We have sent you confirmation by email We have activated the Service(s), or",
      "(ii) when You first start to use the Service(s), whichever is the sooner.“Website” means our internet presence at www.voiceeratech.com and any other locations we advertise from time to time, whether or not you have been aware of the same."
    ]
  },
  {
    "id": "section-28",
    "number": "26",
    "title": "26. Responsible Calling & Regulatory Declarations",
    "category": "Customer Declarations",
    "paragraphs": [
      "Prior to engaging Voice Era Tech services, I/we will ensure that I/we am/are familiar with governing laws within the jurisdiction of operation that would be applicable to my/our call campaign.",
      "My/Our campaign will be respectful of proper calling time restrictions that would be applicable to my/our specific call campaign. In particular, I/we will ensure that no data will be used for the purposes of voice and SMS campaigns fall outside social hours as defined at point 32.4 below.",
      "I/We will conduct my/our campaigns within the guidelines issued by national regulators (Ofcom and the International Commissioner’s Office for UK based operations and the Telephone Consumer Protection Act, 1991 for the USA).",
      "I/We will restrict our campaigns to the hours 8am and 9pm, unless a customer requests, and agrees to a call being placed outside these hours.",
      "I/We understand that I may contact Voice Era Tech for its assistance in the upload of any existing DNC list. In the event a recipient makes a request to be taken off my/our calling list, I/we will do so immediately and indefinitely, unless otherwise and expressly requested to the contrary.",
      "I/We understand that allowing those on my/our calling list to be removed and avoiding calls to those who do not wish to be called, plays a very important role with regard to responsible calling campaigns. I/we will always adhere to legal requirements of the governing jurisdiction of operation, particularly regarding Robinson lists and call time restrictions. I/we will clearly state the identity of the caller at the beginning of my/our audio message and provide authentic and verifiable contact information such as phone number and business address during all calls.",
      "I/We will provide the opportunity for a customer to withdraw the consent they have previously given and instead place them on a DNC list instead.",
      "I/We will prevent strings of numbers to be called that engage two or more phone lines of a business.",
      "I/We will not make any voice or SMS broadcasts to any emergency service phone lines, hospital medical service lines, GPs, healthcare providers, ambulance, fire, military, civil defence or law enforcement agencies.",
      "I/We will not send any unsolicited audio messages to those recipients who may, or will incur charges, such as beepers, pagers or mobile phones, unless explicit prior permission has been obtain by the recipient.",
      "I/We will not send pre-recorded sales messages, voice or SMS broadcasts to those with whom I/we do not have a business relationship and to whom I/we have not received permission to call.",
      "I/We have read, understood and accept this Voice Era Tech Terms of Service."
    ]
  }
];
