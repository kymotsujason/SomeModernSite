import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";

class Privacy extends Component {
    constructor(props) {
        super(props);

        this.showAnalytics = this.showAnalytics.bind(this);
        this.showLegal = this.showLegal.bind(this);
        this.showAdvanced = this.showAdvanced.bind(this);
    }

    showAnalytics() {
        return (
            <div className="privacy">
                <span className="work_exp">
                    <p
                        className="bold subtitle"
                        style={{ marginBottom: "-20px" }}
                    >
                        Analytics
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The services contained in this section enable the Owner
                        to monitor and analyze web traffic and can be used to
                        keep track of User behavior.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Google Analytics (Google LLC)
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Google Analytics is a web analysis service provided by
                        Google LLC (“Google”). Google utilizes the Data
                        collected to track and examine the use of this
                        Application, to prepare reports on its activities and
                        share them with other Google services. Google may use
                        the Data collected to contextualize and personalize the
                        ads of its own advertising network.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Personal Data collected: Cookies; Usage Data.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Place of processing: United States – Privacy Policy –
                        Opt Out. Privacy Shield participant.
                    </p>
                </span>
            </div>
        );
    }

    showLegal() {
        return (
            <div className="privacy">
                <span className="work_exp">
                    <p
                        className="bold subtitle"
                        style={{ marginBottom: "-20px" }}
                    >
                        Definitions and legal references
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Personal Data (or Data)
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Any information that directly, indirectly, or in
                        connection with other information — including a personal
                        identification number — allows for the identification or
                        identifiability of a natural person.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Usage Data
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Information collected automatically through this
                        Application (or third-party services employed in this
                        Application), which can include: the IP addresses or
                        domain names of the computers utilized by the Users who
                        use this Application, the URI addresses (Uniform
                        Resource Identifier), the time of the request, the
                        method utilized to submit the request to the server, the
                        size of the file received in response, the numerical
                        code indicating the status of the server's answer
                        (successful outcome, error, etc.), the country of
                        origin, the features of the browser and the operating
                        system utilized by the User, the various time details
                        per visit (e.g., the time spent on each page within the
                        Application) and the details about the path followed
                        within the Application with special reference to the
                        sequence of pages visited, and other parameters about
                        the device operating system and/or the User's IT
                        environment.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        User
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The individual using this Application who, unless
                        otherwise specified, coincides with the Data Subject.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Data Subject
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The natural person to whom the Personal Data refers.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Data Processor (or Data Supervisor)
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The natural or legal person, public authority, agency or
                        other body which processes Personal Data on behalf of
                        the Controller, as described in this privacy policy.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Data Controller (or Owner)
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The natural or legal person, public authority, agency or
                        other body which, alone or jointly with others,
                        determines the purposes and means of the processing of
                        Personal Data, including the security measures
                        concerning the operation and use of this Application.
                        The Data Controller, unless otherwise specified, is the
                        Owner of this Application.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        This Application
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The means by which the Personal Data of the User is
                        collected and processed.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Service
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The service provided by this Application as described in
                        the relative terms (if available) and on this
                        site/application.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        European Union (or EU)
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Unless otherwise specified, all references made within
                        this document to the European Union include all current
                        member states to the European Union and the European
                        Economic Area.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Cookies
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Small sets of data stored in the User's device.
                    </p>
                </span>
            </div>
        );
    }

    showAdvanced() {
        return (
            <div className="privacy">
                <span className="work_exp">
                    <p
                        className="bold subtitle"
                        style={{ marginBottom: "-20px" }}
                    >
                        Types of Data collected
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Among the types of Personal Data that this Application
                        collects, by itself or through third parties, there are:
                        Cookies; Usage Data.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Complete details on each type of Personal Data collected
                        are provided in the dedicated sections of this privacy
                        policy or by specific explanation texts displayed prior
                        to the Data collection.
                        <br />
                        Personal Data may be freely provided by the User, or, in
                        case of Usage Data, collected automatically when using
                        this Application.
                        <br />
                        Unless specified otherwise, all Data requested by this
                        Application is mandatory and failure to provide this
                        Data may make it impossible for this Application to
                        provide its services. In cases where this Application
                        specifically states that some Data is not mandatory,
                        Users are free not to communicate this Data without
                        consequences to the availability or the functioning of
                        the Service. Users who are uncertain about which
                        Personal Data is mandatory are welcome to contact the
                        Owner.
                        <br />
                        Any use of Cookies – or of other tracking tools – by
                        this Application or by the owners of third-party
                        services used by this Application serves the purpose of
                        providing the Service required by the User, in addition
                        to any other purposes described in the present document
                        and in the Cookie Policy, if available.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Users are responsible for any third-party Personal Data
                        obtained, published or shared through this Application
                        and confirm that they have the third party's consent to
                        provide the Data to the Owner.
                    </p>
                    <p
                        className="bold subtitle"
                        style={{ marginBottom: "-20px" }}
                    >
                        Mode and place of processing the Data
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Methods of processing
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The Owner takes appropriate security measures to prevent
                        unauthorized access, disclosure, modification, or
                        unauthorized destruction of the Data.
                        <br />
                        The Data processing is carried out using computers
                        and/or IT enabled tools, following organizational
                        procedures and modes strictly related to the purposes
                        indicated. In addition to the Owner, in some cases, the
                        Data may be accessible to certain types of persons in
                        charge, involved with the operation of this Application
                        (administration, sales, marketing, legal, system
                        administration) or external parties (such as third-party
                        technical service providers, mail carriers, hosting
                        providers, IT companies, communications agencies)
                        appointed, if necessary, as Data Processors by the
                        Owner. The updated list of these parties may be
                        requested from the Owner at any time.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-5px" }}
                    >
                        Legal basis of processing
                    </p>
                    <div
                        className="description"
                        style={{ marginBottom: "0px" }}
                    >
                        The Owner may process Personal Data relating to Users if
                        one of the following applies:
                        <ul>
                            <li>
                                Users have given their consent for one or more
                                specific purposes. Note: Under some legislations
                                the Owner may be allowed to process Personal
                                Data until the User objects to such processing
                                (“opt-out”), without having to rely on consent
                                or any other of the following legal bases. This,
                                however, does not apply, whenever the processing
                                of Personal Data is subject to European data
                                protection law;
                            </li>
                            <li>
                                provision of Data is necessary for the
                                performance of an agreement with the User and/or
                                for any pre-contractual obligations thereof;
                            </li>
                            <li>
                                processing is necessary for compliance with a
                                legal obligation to which the Owner is subject;
                            </li>
                            <li>
                                processing is related to a task that is carried
                                out in the public interest or in the exercise of
                                official authority vested in the Owner;
                            </li>
                            <li>
                                processing is necessary for the purposes of the
                                legitimate interests pursued by the Owner or by
                                a third party.
                            </li>
                        </ul>
                    </div>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        In any case, the Owner will gladly help to clarify the
                        specific legal basis that applies to the processing, and
                        in particular whether the provision of Personal Data is
                        a statutory or contractual requirement, or a requirement
                        necessary to enter into a contract.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Place
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The Data is processed at the Owner's operating offices
                        and in any other places where the parties involved in
                        the processing are located.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Depending on the User's location, data transfers may
                        involve transferring the User's Data to a country other
                        than their own. To find out more about the place of
                        processing of such transferred Data, Users can check the
                        section containing details about the processing of
                        Personal Data.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Users are also entitled to learn about the legal basis
                        of Data transfers to a country outside the European
                        Union or to any international organization governed by
                        public international law or set up by two or more
                        countries, such as the UN, and about the security
                        measures taken by the Owner to safeguard their Data.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        If any such transfer takes place, Users can find out
                        more by checking the relevant sections of this document
                        or inquire with the Owner using the information provided
                        in the contact section.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Retention time
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Personal Data shall be processed and stored for as long
                        as required by the purpose they have been collected for.
                    </p>
                    <div
                        className="description"
                        style={{ marginBottom: "0px" }}
                    >
                        Therefore:
                        <ul>
                            <li>
                                Personal Data collected for purposes related to
                                the performance of a contract between the Owner
                                and the User shall be retained until such
                                contract has been fully performed.
                            </li>
                            <li>
                                Personal Data collected for the purposes of the
                                Owner’s legitimate interests shall be retained
                                as long as needed to fulfill such purposes.
                                Users may find specific information regarding
                                the legitimate interests pursued by the Owner
                                within the relevant sections of this document or
                                by contacting the Owner.
                            </li>
                        </ul>
                    </div>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The Owner may be allowed to retain Personal Data for a
                        longer period whenever the User has given consent to
                        such processing, as long as such consent is not
                        withdrawn. Furthermore, the Owner may be obliged to
                        retain Personal Data for a longer period whenever
                        required to do so for the performance of a legal
                        obligation or upon order of an authority.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Once the retention period expires, Personal Data shall
                        be deleted. Therefore, the right to access, the right to
                        erasure, the right to rectification and the right to
                        data portability cannot be enforced after expiration of
                        the retention period.
                    </p>
                    <p
                        className="bold subtitle"
                        style={{ marginBottom: "-20px" }}
                    >
                        The purposes of processing
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The Data concerning the User is collected to allow the
                        Owner to provide its Services, as well as for the
                        following purposes: Analytics.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Users can find further detailed information about such
                        purposes of processing and about the specific Personal
                        Data used for each purpose in the respective sections of
                        this document.
                    </p>
                    <p
                        className="bold subtitle"
                        style={{ marginBottom: "-20px" }}
                    >
                        Detailed information on the processing of Personal Data
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Personal Data is collected for the following purposes
                        and using the following services:
                    </p>
                    {this.showAnalytics()}
                    <p
                        className="bold subtitle"
                        style={{ marginBottom: "-20px" }}
                    >
                        The rights of Users
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Users may exercise certain rights regarding their Data
                        processed by the Owner.
                    </p>
                    <div
                        className="description"
                        style={{ marginBottom: "0px" }}
                    >
                        <ul>
                            <li>
                                <span className="bold">
                                    Withdraw their consent at any time
                                </span>
                                . Users have the right to withdraw consent where
                                they have previously given their consent to the
                                processing of their Personal Data.
                            </li>
                            <li>
                                <span className="bold">
                                    Object to processing of their Data
                                </span>
                                . Users have the right to object to the
                                processing of their Data if the processing is
                                carried out on a legal basis other than consent.
                                Further details are provided in the dedicated
                                section below.
                            </li>
                            <li>
                                <span className="bold">Access their Data</span>.
                                Users have the right to learn if Data is being
                                processed by the Owner, obtain disclosure
                                regarding certain aspects of the processing and
                                obtain a copy of the Data undergoing processing.
                            </li>
                            <li>
                                <span className="bold">
                                    Verify and seek rectification
                                </span>
                                . Users have the right to verify the accuracy of
                                their Data and ask for it to be updated or
                                corrected.
                            </li>
                            <li>
                                <span className="bold">
                                    Restrict the processing of their Data
                                </span>
                                . Users have the right, under certain
                                circumstances, to restrict the processing of
                                their Data. In this case, the Owner will not
                                process their Data for any purpose other than
                                storing it.
                            </li>
                            <li>
                                <span className="bold">
                                    Have their Personal Data deleted or
                                    otherwise removed
                                </span>
                                . Users have the right, under certain
                                circumstances, to obtain the erasure of their
                                Data from the Owner.
                            </li>
                            <li>
                                <span className="bold">
                                    Receive their Data and have it transferred
                                    to another controller
                                </span>
                                . Users have the right to receive their Data in
                                a structured, commonly used and machine readable
                                format and, if technically feasible, to have it
                                transmitted to another controller without any
                                hindrance. This provision is applicable provided
                                that the Data is processed by automated means
                                and that the processing is based on the User's
                                consent, on a contract which the User is part of
                                or on pre-contractual obligations thereof.
                            </li>
                            <li>
                                <span className="bold">Lodge a complaint</span>.
                                Users have the right to bring a claim before
                                their competent data protection authority.
                            </li>
                        </ul>
                    </div>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Details about the right to object to processing
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Where Personal Data is processed for a public interest,
                        in the exercise of an official authority vested in the
                        Owner or for the purposes of the legitimate interests
                        pursued by the Owner, Users may object to such
                        processing by providing a ground related to their
                        particular situation to justify the objection.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Users must know that, however, should their Personal
                        Data be processed for direct marketing purposes, they
                        can object to that processing at any time without
                        providing any justification. To learn, whether the Owner
                        is processing Personal Data for direct marketing
                        purposes, Users may refer to the relevant sections of
                        this document.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        How to exercise these rights
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Any requests to exercise User rights can be directed to
                        the Owner through the contact details provided in this
                        document. These requests can be exercised free of charge
                        and will be addressed by the Owner as early as possible
                        and always within one month.
                    </p>
                    <p
                        className="bold subtitle"
                        style={{ marginBottom: "-20px" }}
                    >
                        Additional information about Data collection and
                        processing
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Legal action
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The User's Personal Data may be used for legal purposes
                        by the Owner in Court or in the stages leading to
                        possible legal action arising from improper use of this
                        Application or the related Services.
                        <br />
                        The User declares to be aware that the Owner may be
                        required to reveal personal data upon request of public
                        authorities.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Additional information about User's Personal Data
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        In addition to the information contained in this privacy
                        policy, this Application may provide the User with
                        additional and contextual information concerning
                        particular Services or the collection and processing of
                        Personal Data upon request.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        System logs and maintenance
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        For operation and maintenance purposes, this Application
                        and any third-party services may collect files that
                        record interaction with this Application (System logs)
                        use other Personal Data (such as the IP Address) for
                        this purpose.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Information not contained in this policy
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        More details concerning the collection or processing of
                        Personal Data may be requested from the Owner at any
                        time. Please see the contact information at the
                        beginning of this document.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        How “Do Not Track” requests are handled
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        This Application does not support “Do Not Track”
                        requests.
                        <br />
                        To determine whether any of the third-party services it
                        uses honor the “Do Not Track” requests, please read
                        their privacy policies.
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Changes to this privacy policy
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        The Owner reserves the right to make changes to this
                        privacy policy at any time by giving notice to its Users
                        on this page and possibly within this Application and/or
                        - as far as technically and legally feasible - sending a
                        notice to Users via any contact information available to
                        the Owner. It is strongly recommended to check this page
                        often, referring to the date of the last modification
                        listed at the bottom.
                    </p>
                    <p className="description" style={{ marginBottom: "0px" }}>
                        Should the changes affect processing activities
                        performed on the basis of the User’s consent, the Owner
                        shall collect new consent from the User, where required.
                    </p>
                </span>
            </div>
        );
    }

    showSimple() {
        return (
            <div className="privacy">
                <span className="work_exp">
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Analytics
                    </p>
                    <p
                        className="bold description"
                        style={{ marginBottom: "-20px" }}
                    >
                        Google Analytic
                        <br />
                        <span
                            className="description"
                            style={{ marginBottom: "0px" }}
                        >
                            Among the types of Personal Data that this
                            Application collects, by itself or through third
                            parties, there are: Cookies; Usage Data.
                        </span>
                    </p>
                </span>
            </div>
        );
    }

    render() {
        if (document.title !== "Privacy Policy") {
            document.title = "Privacy Policy";
        }

        return (
            <div>
                <Panel className="main_content">
                    <div className="center_content push_down">
                        <p className="title">Privacy Policy</p>
                        {this.showAdvanced()}
                        {this.showLegal()}
                    </div>
                </Panel>
            </div>
        );
    }
}

export default Privacy;
