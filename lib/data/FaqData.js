import Link from "next/link";

const options = [
  {
    title: <>WHAT IS MEANT BY FIITJEE?</>,
    body: (
      <>
        FIITJEE is the Forum for IIT-JEE. It is premier Institute giving
        preparation for IIT-JEE and other Engineering Entrance Examinations.
        Started in Delhi in the Year 1992, It is Presently in almost all state
        capitals (More than 50 cities) across the country.
      </>
    ),
  },
  {
    title: (
      <>
        {" "}
        DOES FIITJEE GIVE COACHING ONLY TO IIT-JEE OR HOW IS FIITJEE DIFFERENT
        FROM OTHER INSTITUTES?
      </>
    ),
    body: (
      <>
        <ul className="pl-8">
          <li>
            {" "}
            Even though the FIITJEE Programs speak about JEE (Main & Advanced)
            Coaching, the preparations are given comprehensively for other
            competitive Exams also like NTSE, Olympiads, KVPY and also
            Engineering Entrance Exams like BITSAT etc. FIITJEE's USA UnivQuest
            program prepares students for SAT, SAT II and AP (For Admission in
            US Universities).
          </li>
          <li>
            FIITJEE has a unique pattern of selecting students through Admission
            Test wherein selected students are given a personalized coaching
            (Individual Attention) at each and every point of time.
          </li>
          <li>
            FIITJEE also has permanent faculty members fully trained & dedicated
            to train students effectively in all the subjects.
          </li>
          <li>
            The study material of FIITJEE is pattern-proof i.e. students are
            prepared for JEE (Main & Advanced) irrespective of any type of
            pattern.
          </li>
          <li>
            FIITJEE, on the basis of performance in class exams, assigns a
            Success Potential Index  which helps the student to improve his
            level.
          </li>
          <li>
            Even after completion of coaching, rank improvement programs are
            conducted to improve the student to get a better rank.
          </li>
          <li>
            FIITJEE's Integrated school programs are the first of its kind and
            is a revolution in education. It prepares the student for
            competitive exam within the school schedule along with
            extra-curricular activities and sports.
          </li>
          <li>
            Moreover FIITJEE has consistent & excellent results in all
            competitive exams.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>WHAT IS THE PROCEDURE TO JOIN FIITJEE PROGRAMS ?</>,
    body: (
      <>
        Students who are willing to join have to appear for an Admission Test
        conducted by FIITJEE. Based on the performance in the admission test,
        various programs will be offered according to his/her class.
      </>
    ),
  },
  {
    title: <>WWHY CAN'T WE GET DIRECT ADMISSION IN FIITJEE PROGRAMS?</>,
    body: (
      <>
        There are two reasons. One main reason is that FIITJEE's Programs are
        specialty programs that aims at preparing students for coveted entrance
        examinations like JEE (Main & Advanced), Olympiads, KVPY, NTSE, SAT etc.
        Not every student will be able to appreciate the extra load. Moreover,
        by way of admission test, we endeavor to ensure students have sufficient
        base knowledge to appreciate the program. Yes, Success will depend upon
        his hard work, Sincerity, Continuity and support from his parents.
        Secondly, we have limited seats to offer.
      </>
    ),
  },
  {
    title: <>IS YOUR ADMISSION TEST BASED ON CBSE PORTION?</>,
    body: (
      <>
        No. It is based on the current patterns of JEE (Main & Advanced),
        Olympiads, KVPY, NTSE, SAT etc. Our admission test is not restricted to
        a particular curriculum. It is designed to check the overall ability of
        the student instead of just command over the subject. The IQ test is
        specifically designed to test a student's potential for JEE (Main &
        Advanced).
      </>
    ),
  },
  {
    title: <>HOW FREQUENTLY FIITJEE CONDUCTS ADMISSION TESTS?</>,
    body: (
      <>
        Normally, FIITJEE Admission Tests are conducted almost twice every month
        from January to July every year on Sundays. In case of short contact
        programs, admission tests are held from August to January.
      </>
    ),
  },
  {
    title: (
      <>
        WHAT ARE THE SUBJECTS TO BE PREPARED & WHAT IS THE QUESTION PAPER
        PATTERN FOR THE ADMISSION TEST?
      </>
    ),
    body: (
      <>
        At the Junior level, for students seeking admission to class 6th - 10th,
        the subjects for testing are IQ + Science + Math. At the senior level,
        for student seeking admission to class 11th and 12th or 12th pass, tests
        are conducted in subjects - IQ, Physics, Chemistry and Mathematics.
      </>
    ),
  },
  {
    title: (
      <>CAN WE GET HARDCOPIES OF SAMPLE QUESTION PAPER FOR ADMISSION TEST?</>
    ),
    body: (
      <>
        In order to ensure smooth flow of information, FIITJEE wants to validate
        your contact details like address, Telephone No's, E Mail ID's etc.
        online after registering for admission test. Log on to the website
        http://www.fiitjee.com/updatecontact.aspx to update the contact details.
        The sample papers are available online after this validation.
        Information for the same is provided on the FIITJEE Admission Test Hall
        Ticket.
      </>
    ),
  },
  {
    title: (
      <>
        WHAT IS THE CUT-OFF FOR GETTING SELECTED OR GETTING SCHOLARSHIP IN
        ADMISSION TESTS?
      </>
    ),
    body: (
      <>
        FIITJEE's Admission Test is being evaluated with the similar process of
        competitive exams. Based on the question paper, difficulty level and
        overall performance given on a particular date of the exam, the
        percentile system of selection is given both for the program offering as
        well as scholarship.
      </>
    ),
  },
  {
    title: <>WHY FIITJEE DOESN'T CONDUCT ONLINE ADMISSION TEST?</>,
    body: (
      <>
        The students from rural areas are not aware with online exams especially
        in the lower classes like 6th, 7th & 8th.
      </>
    ),
  },
  {
    title: <>WHAT ARE THE CLASS TIMINGS FOR FIITJEE PROGRAMS?</>,
    body: (
      <>
        Class timings vary with different programs. Integrated school program is
        conducted during the regular school hours itself for 5-6 days in a week.
        Classroom programs are conducted after school hours in the evenings (3/4
        Hrs per day, 3/4 days in a week) or on Saturdays & Sundays (6 hrs on
        Saturday and 6 hrs on Sunday) or on Sundays & Holiday (6 Hrs) The Timing
        varies from Centre to Centre . Please Contact your preferred study
        centre for exact details.
      </>
    ),
  },
  {
    title: <>CAN I APPEAR IN FIITJEE ADMISSION TEST FOR THE SECOND TIME?</>,
    body: (
      <>
        Yes. If a Student appears in FIITJEE admission test (including Big Bang
        Edge Test) for the second time, Scholarship if awarded, in the latter
        test will be scaled down by one slab so that he / she does not have any
        undue advantage over a fresh Student appearing for the first time.
      </>
    ),
  },
  {
    title: <>WHY ARE YOUR ENROLLMENT FORMALITIES VERY TEDIOUS?</>,
    body: (
      <>
        We believe in making everything clear to you and specially the worst
        part. Verbal discussions may create communication gaps. We want you to
        be clear of every aspect of the program at FIITJEE in writing.
      </>
    ),
  },
  {
    title: <>WHY CERTAIN POINTS IN YOUR ENROLLMENT FORM ARE REPEATED?</>,
    body: (
      <>
        It might look as repetition, but they are created to ensure no
        communication gap.
      </>
    ),
  },
  {
    title: <>WHY DO YOU KEEP SO MANY FEE HEADS IN YOUR FEES PLAN?</>,
    body: (
      <>
        Again, for transparency and clear communication, you should be aware
        about what it is you are spending the money for and what is inbuilt in
        the program.
      </>
    ),
  },
  {
    title: <>WHY THERE IS NO FEE STRUCTURE IN YOUR BROCHURES?</>,
    body: (
      <>
        In order to give advantage to serious aspirants who plan to start their
        preparation early, FIITJEE charges less fee from early joining students.
        Various fee plans in the brochure will make it bulky and it will be
        confusing to student and parent too. Tostreamline it, the applicable fee
        plan's along with entire Enrolment Kit are provided in the online
        results of the respective FIITJEE Tests.
      </>
    ),
  },
  {
    title: <>WHY IS YOUR FEES STRUCTURE CHANGING ALWAYS?</>,
    body: (
      <>
        Competitive exams like JEE (Main & Advanced), KVPY, Olympiads, NTSE, SAT
        etc. require a pre-planned and strategic approach. To encourage students
        to start their preparation early, we offer lesser fee to them who plan
        in advance and start their preparation early.
      </>
    ),
  },
  {
    title: <> WHY CAN’T WE HAVE SINGLE PAYMENT OPTIONS?</>,
    body: (
      <>
        A single payment option will not be convenient to many students /
        parents. If it is convenient to you, you can very wellpay all the
        installments at one go.
      </>
    ),
  },
  {
    title: (
      <>
        WHY IS YOUR FEE FOR THE IIT-JEE COACHING ON THE HIGHER SIDE? WHAT
        DIFFERENCE DOES IT MAKE IN COMPARISON TO OTHERS?
      </>
    ),
    body: (
      <>
        Everything is structured, right from registration till student passing
        out for JEE. FIITJEE has never compromised on quality. As an added
        advantage, we have full time faculty, fully dedicated for Training
        purposes ensuring high standard of teaching, Comprehensive Study
        Material, very good infrastructure etc. Hence, for quality product you
        can spend an extra cost.
      </>
    ),
  },
  {
    title: (
      <>
        {" "}
        WILL SPECIAL CLASSES BE ARRANGED FOR STUDENT WHO MISSED A COUPLE OF
        CLASSES DUE TO UNAVOIDABLE CIRCUMSTANCES?
      </>
    ),
    body: (
      <>
        No, we don’t provide special classes in the schedule for the missed
        classes. But still the child has an advantage of seeking the help from
        respective faculty by way of fixing appointments. Normally in FIITJEE,
        doubt clearing session happens at a frequency of almost every day.
      </>
    ),
  },
  {
    title: (
      <>
        {" "}
        IS IT SUFFICIENT FOR ME TO CONCENTRATE ON FIITJEE STUDY MATERIALS ALONE
        TO ATTAIN MY GOAL OR DO I NEED OTHER SUPPLEMENTS?
      </>
    ),
    body: (
      <>
        FIITJEE study materials are prepared by a committed team which ensures
        the latest developments and updates in JEE (Main & Advanced) and other
        competitive exams. Moreover, the study material of FIITJEE is pattern
        proof which can be confirmed from any FIITJEE student successful in JEE.
        Hence it is upto you to decide.
      </>
    ),
  },
];

export default options;
