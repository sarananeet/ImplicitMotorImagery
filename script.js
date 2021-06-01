// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "motor-imagery",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Motor Imagery ",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "parameters": {},
  "files": {},
  "messageHandlers": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "width": "",
          "height": "",
          "src": "${ this.files[\"university-of-manitoba-logo_1.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "text",
          "title": "PRINICIPAL INVESTIGATORS:",
          "content": "Aneet Saran, MA student, Psychology \nUniversity of Manitoba\n(204) 998-0912"
        },
        {
          "required": true,
          "type": "text",
          "content": "Dr. Jonathan Marotta, Professor, Psychology University of Manitoba\n(204) 474-7057\n",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Purpose ",
          "content": "We are interested in how you judge hand images presented in different orientations. "
        },
        {
          "required": true,
          "type": "text",
          "title": "DESCRIPTION:",
          "content": "This study will take no longer than an hour. During the study, you will be required to judge hand images of left and right hands displayed from two different viewpoints (palm and back) and in four different orientations. Prior to this task, you will be asked to fill out a health questionnaire that will ask you about your age, gender, handedness, vision, and reaction time. In addition, you will be required to fill out a health questionnaire that will ask you about your physical and cognitive activities. Participants over the age of 65 will be given a list of questions to fill and write out about their memory and mental abilities. Participants recruited via the online Department of Psychology sign-up system will earn 1 experimental credit for their participation in this study. "
        },
        {
          "required": true,
          "type": "text",
          "title": "RISKS AND BENEFITS:",
          "content": "There are no risks (physical, psychological and\u002For emotional) inherent in the tasks you will perform but some of the tests may be repetitive. By participating in this study, you will be providing valuable data. "
        },
        {
          "required": true,
          "type": "text",
          "title": "CONFIDENTIALITY: ",
          "content": "Your information will be kept confidential. You will be referred to by a code number. Identifying information will be stored separately from data with your code number. Your files will only be accessible by the investigators. Identifying information will be destroyed once the research is completed (estimation completion date May 2022). The data in this study will be anonymized and therefore does not need to be destroyed. The anonymized data will be made available, in accordance with journal and granting agency requirements. \n"
        },
        {
          "required": true,
          "type": "text",
          "title": "VOLUNTARY CONSENT",
          "content": "By selecting the 'I Consent' option, you are indicating that you have understood to your satisfaction the information regarding participation in the research project and agree to participate as a subject. In no way does this waive your legal rights nor release the researchers, sponsors, or involved institutions from their legal and professional responsibilities. "
        },
        {
          "required": true,
          "type": "text",
          "content": "You are free to withdraw from the study at any time, and \u002For refrain from answering any questions you prefer to omit, without prejudice or consequence. Participants recruited via the online Department of Psychology sign-up system will still receive 1 participation credit if they choose to withdraw at any point from the study. ",
          "title": "WITHDRAW"
        },
        {
          "required": true,
          "type": "text",
          "content": "This research has been approved by the Research Ethics Board (REB1) of the University of Manitoba. If you have any concerns or complaints about this project you may contact any of the above- named persons or the Human Ethics Coordinator (HEC) by email: humanethics@umanitoba or by telephone: 474-7122. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "I consent",
              "coding": "1"
            },
            {
              "label": "I do not consent",
              "coding": "2"
            }
          ],
          "label": "ELECTRONIC CONSENT: Please select your choice below.",
          "name": "Participant_Consent"
        },
        {
          "required": false,
          "type": "input",
          "label": "If you would like to receive general summary of the results from this study when it is completed, please complete your mailing (or email) address below:",
          "attributes": {
            "type": "email"
          },
          "name": "if-you-would-like-to-receive-general-summary-of-the-results-from-this-study-when-it-is-completed-please-complete-your-mailing-(or-email)-address-below:"
        },
        {
          "required": true,
          "type": "html",
          "content": "",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "university-of-manitoba-logo_1.jpg": "embedded\u002Fcd2b00febbcb8dbeb6a08d34ad22517087eac2dc03b89074e0e14d034da71277.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consent Format"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Debriefing Form",
          "content": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "text",
          "content": "Thank you for participating in this study. The purpose of this study was to measure the ability to mentally stimulate movements without actually executing them. To test this action stimulation, we used the hand laterality task. In this task, participants are shown left- and right-hand mirror images from two different viewpoints (palm and back) and in different orientations. They have to identify whether the image presented is of the left hand or the right hand. What is currently lacking in this area is a clear understanding of how motor imagery is affected by normal aging. Specifically, this study sought to expand current understandings of the relationship between the ability to mentally simulate movements and normal aging using the hand laterality task. We expect to see that older adults will be less accurate and have slower reaction times than younger adults in their left-right hand judgments when presented with hand-stimuli in the most difficult conditions. We also expect males to respond faster than females in judging hands portrayed from the palm. Additionally, we expect females to be faster than males in judging hands portrayed from the back. Thank you again for participating and have a great day."
        },
        {
          "required": true,
          "type": "text",
          "content": "If you have any questions about this study, please feel free to contact us: "
        },
        {
          "required": true,
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "Aneet Saran (MA Student, Psychology, University of Manitoba, \u003Ca href=\"mailto:sarana3@myumanitoba.ca\"\u003Esarana3@myumanitoba.ca\u003C\u002Fa\u003E\u003C\u002Fli\u003E)",
          "name": ""
        },
        {
          "required": true,
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "Dr. Jonathan Marotta (Professor, Psychology, University of Manitoba, \u003Ca href=\"mailto:sarana3@myumanitoba.ca\"\u003Ejonathan.marotta@umanitoba.ca\u003C\u002Fa\u003E\u003C\u002Fli\u003E)",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": " Please exit by closing the browser window. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing form ",
      "tardy": true,
      "skip": "${this.state['Participant_Consent'] == '1'}"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Chtml\u003E\n    \u003Cbody\u003E\n\n\u003Cb\u003E \u003Cspan style=\"color: red;\"\u003E \u003C\u002Fspan\u003E\n\nClicking the 'Continue' button below will open up a new window redirecting you to SONA, and awarding your 1 participation credit.  Once the new window opens, please minimize it and continue the experiment.  You may return to the new window following completion of the experiment. \u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n    Some browsers use pop-up blockers which may prevent the new window from opening.  If for some reason the new window does not open, and you do not receive credit for your participation in this study, please email sarana3@myumanitoba.ca \u003Cspan style=\"color: red;\"\u003E after completing the experiment.\u003C\u002Fspan\u003E  \u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n  \n  Reminder: You are free to withdraw from the study at any time by exiting your browser (participation is completely voluntary), and\u002For refrain from answering any questions you prefer to omit, without prejudice or consequence.  You will also still receive your participation credit if you encounter any technical difficulties, and cannot continue.  This means that should you choose to withdraw at any point from\u2029the study, you will still receive 1 participation credit. \u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n    \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n\n\u003Cbutton onclick=\"window.open('https:\u002F\u002Fumanitobapsych.sona-systems.com\u002Fwebstudy_credit.aspx?experiment_id=1313&credit_token=c84ad4dbec424d0e8a58efb46fee6848&survey_code=${this.state.url.id}'\n,'','width=,height=,resizeable=no');\" id=\"Continue\" class=\"float-left submit-button\" \u003EContinue\u003C\u002Fbutton\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "click button#Continue": "Credit"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": "Please read all the questions carefully and respond to the following information to the best of your ability. If you do not know the answer, please leave it blank. "
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Female",
              "coding": "1"
            },
            {
              "label": "Male",
              "coding": "2"
            }
          ],
          "label": "What sex were you assigned at birth? ",
          "name": "what-sex-were-you-assigned-at-birth"
        },
        {
          "required": false,
          "type": "input",
          "label": "Age: ",
          "name": "age:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Normal vision",
              "coding": "1"
            },
            {
              "label": "Corrected-to-normal vision (e.g., lasik eye surgery, prescribed glasses, and etc.)",
              "coding": "2"
            }
          ],
          "label": "Visual acuity:",
          "name": "visual-acuity:"
        },
        {
          "required": true,
          "type": "text",
          "title": "Which hand do you use to do the following?"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "1. Throw a ball:",
          "name": "1.-throw-a-ball:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "2. Brush your teeth:",
          "name": "2.-brush-your-teeth:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "3. Eat soup with a spoon:",
          "name": "3.-eat-soup-with-a-spoon:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "4. Comb your hair:",
          "name": "4.-comb-your-hair:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "5. Cut bread with a knife:",
          "name": "5.-cut-bread-with-a-knife:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "6. Swing tennis\u002Fbadminton racquet or bat:",
          "name": "6.-swing-tennisbadminton-racquet-or-bat:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "7. Hammer a nail:",
          "name": "7.-hammer-a-nail:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "8. Point to something accurately:",
          "name": "8.-point-to-something-accurately:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left ",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "9. Write your name:",
          "name": "9.-write-your-name:"
        },
        {
          "required": false,
          "type": "input",
          "label": "Is there anything you do consistently with your left hand?",
          "name": "is-there-anything-you-do-consistently-with-your-left-hand"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "coding": "1"
            },
            {
              "label": "No",
              "coding": "2"
            }
          ],
          "label": "Do you have a history of hand switching? (e.g., switching from your dominate to your non-dominate hand) ",
          "name": "do-you-have-a-history-of-hand-switching-(e.g.-switching-from-your-dominate-to-your-non-dominate-hand)"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "coding": "1"
            },
            {
              "label": "No",
              "coding": "2"
            }
          ],
          "label": "Do you have a history of motor or neurological disorders? ",
          "name": "do-you-have-a-history-of-motor-or-neurological-disorders"
        },
        {
          "required": false,
          "type": "input",
          "label": "If yes, please specify. ",
          "name": "if-yes-please-specify."
        },
        {
          "required": false,
          "type": "input",
          "label": "During a typical 7-Day period (a week), how many days do you engage in regular physical exercise? ",
          "attributes": {
            "type": "number",
            "min": "1",
            "max": "7"
          },
          "name": "during-a-typical-7-day-period-(a-week)-how-many-days-do-you-engage-in-regular-physical-exercise"
        },
        {
          "required": false,
          "type": "input",
          "label": "During a typical 7-Day period (a week), how many days do you engage in cognitive activities? (e.g. reading newspapers, books or doing puzzles).",
          "attributes": {
            "type": "number",
            "min": "1",
            "max": "7"
          },
          "name": "during-a-typical-7-day-period-(a-week)-how-many-days-do-you-engage-in-cognitive-activities-(e.g.-reading-newspapers-books-or-doing-puzzles)."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographic information "
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Instructions",
          "content": "Please read all the questions carefully and respond to the following information to the best of your ability by typing in the answer box. In addition, you will need 2 plain pieces of paper for this section. Please have it ready before you start answering the questions."
        },
        {
          "required": false,
          "type": "input",
          "label": "What is today's date?",
          "attributes": {
            "type": "date"
          },
          "name": "what-is-today's-date"
        },
        {
          "required": false,
          "type": "input",
          "label": "What month is it?",
          "attributes": {
            "type": "text"
          },
          "name": "what-month-is-it"
        },
        {
          "required": false,
          "type": "input",
          "label": "What year is it?",
          "attributes": {
            "type": "text"
          },
          "name": "what-year-is-it"
        },
        {
          "required": false,
          "type": "input",
          "label": "What day of the week is it today?",
          "name": "what-day-of-the-week-is-it-today"
        },
        {
          "required": false,
          "type": "input",
          "label": "What season is it?",
          "name": "what-season-is-it"
        },
        {
          "required": false,
          "type": "input",
          "label": "What country are we in?",
          "name": "what-country-are-we-in"
        },
        {
          "required": false,
          "type": "input",
          "label": "What state (or province) are we in?",
          "name": "what-state-(or-province)-are-we-in"
        },
        {
          "required": false,
          "type": "input",
          "label": "Starting at 100, count backwards by 7. You can stop after 5 subtractions. Once you have finished, please write down all five subtractions. ",
          "help": "",
          "name": "starting-at-100-count-backwards-by-7.-you-can-stop-after-5-subtractions.-once-you-have-finished-please-write-down-all-five-subtractions."
        },
        {
          "required": true,
          "type": "html",
          "content": "\n\u003Cb\u003EBill, Tar, and Can. I have listed three words and want you to write them down in the answer box. Remember what they are because I am going to ask you to name them again in a few minutes. \u003C\u002Fb\u003E ",
          "name": ""
        },
        {
          "required": false,
          "type": "input",
          "label": "What is the name of the object shown below?",
          "name": "what-is-the-name-of-the-object-shown-below"
        },
        {
          "required": true,
          "type": "image",
          "width": "",
          "height": "",
          "src": "${ this.files[\"watch.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "input",
          "label": "What is the name of the object shown below?",
          "name": "what-is-the-name-of-the-object-shown-below"
        },
        {
          "required": true,
          "type": "image",
          "width": "",
          "height": "",
          "src": "${ this.files[\"pencil.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "input",
          "label": "Take a plain piece of  paper in your hand, fold it in half, and put it on the floor. Please indicate if you have or have not completed all the steps in the answer box. ",
          "name": "take-a-plain-piece-of-paper-in-your-hand-fold-it-in-half-and-put-it-on-the-floor.-please-indicate-if-you-have-or-have-not-completed-all-the-steps-in-the-answer-box."
        },
        {
          "required": false,
          "type": "input",
          "label": "Read the words presented below and then do what it says. Please indicate if you were able to do this task or not. ",
          "name": "read-the-words-presented-below-and-then-do-what-it-says.-please-indicate-if-you-were-able-to-do-this-task-or-not."
        },
        {
          "required": true,
          "type": "image",
          "width": "",
          "height": "",
          "src": "${ this.files[\"close_eyes.jpg\"] }",
          "name": ""
        },
        {
          "required": false,
          "type": "input",
          "label": "Write any complete sentence in the answer box provided. ",
          "name": "write-any-complete-sentence-in-the-answer-box-provided."
        },
        {
          "required": false,
          "type": "input",
          "label": "Remember the 3 words that were provided to you a few minutes ago; please write them down in the answer box. Refrain from scrolling up to view the words. ",
          "name": "remember-the-3-words-that-were-provided-to-you-a-few-minutes-ago-please-write-them-down-in-the-answer-box.-refrain-from-scrolling-up-to-view-the-words."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "watch.jpg": "embedded\u002Ff18a5a18f3f2a8e4feac53a64287394990cc851d01580d9f27fc1d336a3568d9.jpg",
        "pencil.jpg": "embedded\u002F1b3f4af76938523f71e7caac50d4d17160eec643d2184cf8d1bf17b2d0d582fc.jpg",
        "close_eyes.jpg": "embedded\u002F9fbcf6f4b13549b61c6b67087eb772881348550835aa2437c034a6090fe5a522.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MMSE",
      "skip": true
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
this.options.events['click button#fullscreen'] = function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Full screen",
      "content": "\u003Cbutton id=\"fullscreen\"\u003EPress to enter full screen\u003C\u002Fbutton\u003E"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions ",
          "content": "In this test you will be presented with a fixation cross, followed by a red circle. \n"
        },
        {
          "required": true,
          "type": "text",
          "content": "\n1.  Concentrate on the fixation cross.\n",
          "title": "Your task is to :"
        },
        {
          "required": true,
          "type": "html",
          "content": "2. Press the space key with your  \n    \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand once the red circle is presented.",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Simple reaction time"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Repetition": "1",
          "Time": "1500"
        },
        {
          "Repetition": "2",
          "Time": "1500"
        },
        {
          "Repetition": "3",
          "Time": "1500"
        },
        {
          "Repetition": "4",
          "Time": "1500"
        },
        {
          "Repetition": "5",
          "Time": "1500"
        },
        {
          "Repetition": "6",
          "Time": "2000"
        },
        {
          "Repetition": "7",
          "Time": "2000"
        },
        {
          "Repetition": "8",
          "Time": "2000"
        },
        {
          "Repetition": "9",
          "Time": "2000"
        },
        {
          "Repetition": "10",
          "Time": "2000"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "circle",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "170",
                "height": 145.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#d6341a"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(Space)": "left hand"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Circle "
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Intertrial interval",
            "timeout": "${parameters.Time}"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions ",
          "content": "In this test you will be presented with a fixation cross, followed by a red circle. \n"
        },
        {
          "required": true,
          "type": "text",
          "content": "\n1.  Concentrate on the fixation cross.\n",
          "title": "Your task is to :"
        },
        {
          "required": true,
          "type": "html",
          "content": "2. Press the space key with your  \n    \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand once the red circle is presented.",
          "name": ""
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"clean-macbook-keyboard-610x241 (2).jpg\"] }",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "clean-macbook-keyboard-610x241 (2).jpg": "embedded\u002Fd4bef0ac43e1ecf12634724c2744320e1c6ae07e0ca32bf249cbb800b0211bb9.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Simple reaction time"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Repetition": "1",
          "Time": "1500"
        },
        {
          "Repetition": "2",
          "Time": "1500"
        },
        {
          "Repetition": "3",
          "Time": "1500"
        },
        {
          "Repetition": "4",
          "Time": "1500"
        },
        {
          "Repetition": "5",
          "Time": "1500"
        },
        {
          "Repetition": "6",
          "Time": "2000"
        },
        {
          "Repetition": "7",
          "Time": "2000"
        },
        {
          "Repetition": "8",
          "Time": "2000"
        },
        {
          "Repetition": "9",
          "Time": "2000"
        },
        {
          "Repetition": "10",
          "Time": "2000"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "circle",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "170",
                "height": 145.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#d6341a"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(Space)": "left hand"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Circle "
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Intertrial interval",
            "timeout": "${parameters.Time}"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": "In this training phase, you will be presented with hand images in two different views (back and palm)  and different orientations. "
        },
        {
          "required": true,
          "type": "text",
          "title": "Your task:",
          "content": "1. Physically move and match your hand to the images presented on the screen. "
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"IMG_7426.jpeg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"IMG_7707.jpeg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"IMG_7710.jpeg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"IMG_7703.jpeg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "2. Please select the \n    \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'Y'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E  key for \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eyes\u003C\u002Fspan\u003E\u003C\u002Fb\u003E and \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'N'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E key for  \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eno\u003C\u002Fspan\u003E\u003C\u002Fb\u003E to indicate whether you can physically move your hand to the image displayed on the screen. \n\n\n",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"clean-macbook-keyboard-610x241 (1).jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "3. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "IMG_7426.jpeg": "embedded\u002F6c2f68a4aea16e39fa84d3e426de6a1387e7b040543912fab14ef06185fa0ca2.jpeg",
        "IMG_7707.jpeg": "embedded\u002Fa81bab7af4fb3745f7c3b0236e7cdca47f1f0fdc4208490aeeceede578dcbab1.jpeg",
        "IMG_7710.jpeg": "embedded\u002F76f53ea215757bee1c326614a4233f29d1ab72afb91e3de505b55bcf2e4e7694.jpeg",
        "IMG_7703.jpeg": "embedded\u002F2245987a9a51770f960fe095e1fb90e4b27341c1f7f623fd8780b90f50d303bb.jpeg",
        "clean-macbook-keyboard-610x241 (1).jpg": "embedded\u002F93a8964f121528657d71fc12c2679719d384ae730a8a5aac3c13c306d574b9f2.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Training phase 1"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Repetition": "1",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "1200",
                "height": "8000",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 0.png": "embedded\u002Ffffc1a8f96e7aa571fd03335f30491483addd778c62db68ef5447ab3f7cf7376.png",
              "Left back (0) .png": "embedded\u002F616a9928372cf15de331e6a5690c7111a64988b57339f3d8f882f5db2a3b8315.png",
              "Left back (0)  .png": "embedded\u002F654e0d3273700abc55bf2a28246f38e4f43c182bf29152dd0407778d9253966f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (0)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "-18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 180.png": "embedded\u002Ff9e300054523a6a24ed51d6b700f7f06aa44b4b4a56dfbb8657ec6446d6f388e.png",
              "free-video-3045163.jpg": "embedded\u002F3e692b39dfb8ee628014a35ccbdd192ecad8fa85b07649fda792bf54ac549fe1.jpg",
              "Left back (180).png": "embedded\u002F0e65cea49ffac87c2e016d015e844cb997bb8d07408ab53023993ec03f0d205d.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (180)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 0,
                "height": 168,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"download.jpeg\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1227,
                "height": 687.12,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"download.jpeg\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 0.png": "embedded\u002F79b9acf15bff6377b47627132ca7489c54a5f91119f9a13fa37db8742452b2b4.png",
              "Left palm (0).png": "embedded\u002Fbcc3a707592fd0c7afb4c8e694c1c915c511b90bb5c6d5e8e88de0eed9967742.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (0)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002Fa0f94a40a456799f57626c2ecf05959d7fd58c5c58cc6fb669c480f5d51e8f64.jpeg",
              "Right hand (back) 90 M.png": "embedded\u002Faad40d91beedbe86c1a2b5483a246274106a7984f72d99d80ac4a1e943f1788e.png",
              "download.png": "embedded\u002F9685787f0d3c9390b31922b8d64b17c0f1487727fb21de7abb246e9f65106b79.png",
              "plain-black-background-1580x1080.jpg": "embedded\u002F23269b7760b48bf6ccebf0e91eac6ae61a6c5ce4c3465032043e1813eae8b9c7.jpg",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90M).png": "embedded\u002Ff7f8694152f67809921752d8fe09a9028ffd77794275e9b8658223d7322d8d19.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90M)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "12",
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 0.png": "embedded\u002Fa90aa3ebbd3af2a9aa6fac9d5fc61c6c9c69666a8b77cb3ea085dd4200b1be1a.png",
              "Right back (0)  .png": "embedded\u002F65c6411e986708ae6782595d796620ff74a18341f8206bd2a796ab1a75ac5a38.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (0)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90M.png": "embedded\u002Fbbeee3a9fa0b30ce4d3c604e1aa83491efd7a2815fd5074ad623db22d0dee731.png",
              "Right palm (0) .png": "embedded\u002F70e4525a86fa9bb646501826e6d15735abda92243c4c05caaa4427caf526ab5e.png",
              "Left palm (90M).png": "embedded\u002Ff0ee9d4a29d94257614bc4116800e31812c85e3b2ca474f89edf8425c87165eb.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90M)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 L.png": "embedded\u002Fd06f3deb411609444e0999722c2c3affb750f968face3014966e9200a78d3d88.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90L)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 11,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 0.png": "embedded\u002F4e941ee148317da4c096004f91babb1f979db4c6666d3dd6cdd86489bd8101f3.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "Yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (0)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 L.png": "embedded\u002Fccc572a055b828897347233d7bc728cd303182fed18369b07d89a9c1404f4add.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90L)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 M.png": "embedded\u002F75214c42852c33a3cdfa86631b982c7e248963dff00e1f7a6efba85d4e7874b9.png",
              "Right palm (90M).png": "embedded\u002F6477efe8874605841efccd8b77b0c7d98145b25938a0766f8a731a8f16abab62.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90M)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 180.png": "embedded\u002F8bd551c626531fb249c5af108e23ac400844d72815b7e8660dd2c454879c15ee.png",
              "Left Palm (180).png": "embedded\u002F4fd7d8d00a5c05cbb219849f5ada9a881a8401db3e91badfd8157e1638a847d2.png",
              "Left palm (180)  .png": "embedded\u002F501a086959769b62eae2cc8c1d5bbf7baacf35920083759a3a4040f9d53f549f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (180)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (180) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black_background.png": "embedded\u002Fe71caa9433e8e3a76171f4a36a5c5655a4f8dab5d62d68c40f0096360777f123.png",
              "Right hand (back) 180.png": "embedded\u002F0d67d872e6e09c47754c8da91fe950cbd2352a811a054176d522ac2c6ea3ec66.png",
              "Right back (180) .png": "embedded\u002F9a686f4c894816948bf9a0556436967d0893cf31307cc24b1b57d692fe24d806.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (180)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90 L.png": "embedded\u002F860c4d7ccbaa6632ecc58d516914ec61417c9ad0df45dcec4f1aada62b1c6241.png",
              "Left Palm (90L).png": "embedded\u002F9e4170f7ef0b059cd57af6d076d0adda71eaf7c02f8b4c9ca1ee19a347a9d472.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90L)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 90 L .png": "embedded\u002Fee0fcb00faa90a6e1bfefa91a4ad0a3e6cc06d407a369e3587fc8dfbfc7fc2a9.png",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90L)  .png": "embedded\u002F17123593b25ce91f8442a731bd9aae4d87b23e2a2c13a6e15495a0c4d22cfa83.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90L)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 M.png": "embedded\u002Fc5e945da31cac8a6e8e6803f3387dc9ce6459fa7d6dff858514fd5c3041c9458.png",
              "Left back (90M) .png": "embedded\u002Ff27655ceec55969b6ce7bbd8442551cbeb3a7267eb1ad8a4acf7f82223d8c5dc.png",
              "Left back (90M).png": "embedded\u002F756a7f8ebc4812d12c50483143d5134e46249390a139859adde193f3357bd2a9.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90M)"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (180).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 180.png": "embedded\u002F25ea8822992e611c82ed154fd0041990066a6485577016ace0283422ec02ba26.png",
              "Right palm (180).png": "embedded\u002F07ad04dc34416af04c629ec7d00b10813f6cacb0760f1d125c2a5f9e95094537.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (180)"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": "In this training phase, you will be presented with hand images in different orientations. Please refrain from physically moving your hands, and instead use your mental abilities to rotate your hands. "
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"IMG_7447.JPG\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"IMG_7445.JPG\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\n1. Please select the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'K'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E key for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus and the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'A'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E key for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus.",
          "name": ""
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"clean-macbook-keyboard-610x241.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "2. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "IMG_7447.JPG": "embedded\u002F3dd936d61acb1af87264048e62b3f4dd04beb37c4c5ec8b4cc6e821abaa0c2f0.JPG",
        "IMG_7445.JPG": "embedded\u002F321a5980645855da359ce1c052543944ee7c06aec8519cba98c3c4697ef536ae.JPG",
        "clean-macbook-keyboard-610x241.jpg": "embedded\u002F99efb5075161c63e085e2d7076277c9c1774ff5c5ec7046a06682271f6395f11.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Training phase 2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Repetition": "1",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002Fa0f94a40a456799f57626c2ecf05959d7fd58c5c58cc6fb669c480f5d51e8f64.jpeg",
              "Right hand (back) 90 M.png": "embedded\u002Faad40d91beedbe86c1a2b5483a246274106a7984f72d99d80ac4a1e943f1788e.png",
              "download.png": "embedded\u002F9685787f0d3c9390b31922b8d64b17c0f1487727fb21de7abb246e9f65106b79.png",
              "plain-black-background-1580x1080.jpg": "embedded\u002F23269b7760b48bf6ccebf0e91eac6ae61a6c5ce4c3465032043e1813eae8b9c7.jpg",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90M).png": "embedded\u002Ff7f8694152f67809921752d8fe09a9028ffd77794275e9b8658223d7322d8d19.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 0.png": "embedded\u002Ffffc1a8f96e7aa571fd03335f30491483addd778c62db68ef5447ab3f7cf7376.png",
              "Left back (0) .png": "embedded\u002F616a9928372cf15de331e6a5690c7111a64988b57339f3d8f882f5db2a3b8315.png",
              "Left back (0)  .png": "embedded\u002F654e0d3273700abc55bf2a28246f38e4f43c182bf29152dd0407778d9253966f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "-18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 180.png": "embedded\u002Ff9e300054523a6a24ed51d6b700f7f06aa44b4b4a56dfbb8657ec6446d6f388e.png",
              "free-video-3045163.jpg": "embedded\u002F3e692b39dfb8ee628014a35ccbdd192ecad8fa85b07649fda792bf54ac549fe1.jpg",
              "Left back (180).png": "embedded\u002F0e65cea49ffac87c2e016d015e844cb997bb8d07408ab53023993ec03f0d205d.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90M.png": "embedded\u002Fbbeee3a9fa0b30ce4d3c604e1aa83491efd7a2815fd5074ad623db22d0dee731.png",
              "Right palm (0) .png": "embedded\u002F70e4525a86fa9bb646501826e6d15735abda92243c4c05caaa4427caf526ab5e.png",
              "Left palm (90M).png": "embedded\u002Ff0ee9d4a29d94257614bc4116800e31812c85e3b2ca474f89edf8425c87165eb.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 L.png": "embedded\u002Fd06f3deb411609444e0999722c2c3affb750f968face3014966e9200a78d3d88.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 0.png": "embedded\u002F79b9acf15bff6377b47627132ca7489c54a5f91119f9a13fa37db8742452b2b4.png",
              "Left palm (0).png": "embedded\u002Fbcc3a707592fd0c7afb4c8e694c1c915c511b90bb5c6d5e8e88de0eed9967742.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 L.png": "embedded\u002Fccc572a055b828897347233d7bc728cd303182fed18369b07d89a9c1404f4add.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 645.69,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trialtext",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -13,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (180) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black_background.png": "embedded\u002Fe71caa9433e8e3a76171f4a36a5c5655a4f8dab5d62d68c40f0096360777f123.png",
              "Right hand (back) 180.png": "embedded\u002F0d67d872e6e09c47754c8da91fe950cbd2352a811a054176d522ac2c6ea3ec66.png",
              "Right back (180) .png": "embedded\u002F9a686f4c894816948bf9a0556436967d0893cf31307cc24b1b57d692fe24d806.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 M.png": "embedded\u002F75214c42852c33a3cdfa86631b982c7e248963dff00e1f7a6efba85d4e7874b9.png",
              "Right palm (90M).png": "embedded\u002F6477efe8874605841efccd8b77b0c7d98145b25938a0766f8a731a8f16abab62.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 180.png": "embedded\u002F8bd551c626531fb249c5af108e23ac400844d72815b7e8660dd2c454879c15ee.png",
              "Left Palm (180).png": "embedded\u002F4fd7d8d00a5c05cbb219849f5ada9a881a8401db3e91badfd8157e1638a847d2.png",
              "Left palm (180)  .png": "embedded\u002F501a086959769b62eae2cc8c1d5bbf7baacf35920083759a3a4040f9d53f549f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 90 L .png": "embedded\u002Fee0fcb00faa90a6e1bfefa91a4ad0a3e6cc06d407a369e3587fc8dfbfc7fc2a9.png",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90L)  .png": "embedded\u002F17123593b25ce91f8442a731bd9aae4d87b23e2a2c13a6e15495a0c4d22cfa83.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 M.png": "embedded\u002Fc5e945da31cac8a6e8e6803f3387dc9ce6459fa7d6dff858514fd5c3041c9458.png",
              "Left back (90M) .png": "embedded\u002Ff27655ceec55969b6ce7bbd8442551cbeb3a7267eb1ad8a4acf7f82223d8c5dc.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "Left back (90M).png": "embedded\u002F756a7f8ebc4812d12c50483143d5134e46249390a139859adde193f3357bd2a9.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90 L.png": "embedded\u002F860c4d7ccbaa6632ecc58d516914ec61417c9ad0df45dcec4f1aada62b1c6241.png",
              "Left Palm (90L).png": "embedded\u002F9e4170f7ef0b059cd57af6d076d0adda71eaf7c02f8b4c9ca1ee19a347a9d472.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (180).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 180.png": "embedded\u002F25ea8822992e611c82ed154fd0041990066a6485577016ace0283422ec02ba26.png",
              "Right palm (180).png": "embedded\u002F07ad04dc34416af04c629ec7d00b10813f6cacb0760f1d125c2a5f9e95094537.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 10,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 0.png": "embedded\u002F4e941ee148317da4c096004f91babb1f979db4c6666d3dd6cdd86489bd8101f3.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (0)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 11,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 0.png": "embedded\u002Fa90aa3ebbd3af2a9aa6fac9d5fc61c6c9c69666a8b77cb3ea085dd4200b1be1a.png",
              "Right back (0)  .png": "embedded\u002F65c6411e986708ae6782595d796620ff74a18341f8206bd2a796ab1a75ac5a38.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (0)",
            "correctResponse": "l"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "We will now proceed with the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eexperimental phase.\u003C\u002Fspan\u003E\u003C\u002Fb\u003E In this phase, you will be presented with hand images in different orientations. Please refrain from physically moving your hands, and instead use your mental abilities to rotate your hands. ",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Your task is to :",
          "content": "1. Please select the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'K'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E key for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus and the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'A'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E key for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus.\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "2. Respond as quickly and accurately as possible."
        },
        {
          "required": true,
          "type": "text",
          "content": "3. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Experimental phase"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Repetition": "1",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop 1",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "-18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 180.png": "embedded\u002Ff9e300054523a6a24ed51d6b700f7f06aa44b4b4a56dfbb8657ec6446d6f388e.png",
              "free-video-3045163.jpg": "embedded\u002F3e692b39dfb8ee628014a35ccbdd192ecad8fa85b07649fda792bf54ac549fe1.jpg",
              "Left back (180).png": "embedded\u002F0e65cea49ffac87c2e016d015e844cb997bb8d07408ab53023993ec03f0d205d.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 L.png": "embedded\u002Fd06f3deb411609444e0999722c2c3affb750f968face3014966e9200a78d3d88.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002Fa0f94a40a456799f57626c2ecf05959d7fd58c5c58cc6fb669c480f5d51e8f64.jpeg",
              "Right hand (back) 90 M.png": "embedded\u002Faad40d91beedbe86c1a2b5483a246274106a7984f72d99d80ac4a1e943f1788e.png",
              "download.png": "embedded\u002F9685787f0d3c9390b31922b8d64b17c0f1487727fb21de7abb246e9f65106b79.png",
              "plain-black-background-1580x1080.jpg": "embedded\u002F23269b7760b48bf6ccebf0e91eac6ae61a6c5ce4c3465032043e1813eae8b9c7.jpg",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90M).png": "embedded\u002Ff7f8694152f67809921752d8fe09a9028ffd77794275e9b8658223d7322d8d19.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 0.png": "embedded\u002Ffffc1a8f96e7aa571fd03335f30491483addd778c62db68ef5447ab3f7cf7376.png",
              "Left back (0) .png": "embedded\u002F616a9928372cf15de331e6a5690c7111a64988b57339f3d8f882f5db2a3b8315.png",
              "Left back (0)  .png": "embedded\u002F654e0d3273700abc55bf2a28246f38e4f43c182bf29152dd0407778d9253966f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -13,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (180) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black_background.png": "embedded\u002Fe71caa9433e8e3a76171f4a36a5c5655a4f8dab5d62d68c40f0096360777f123.png",
              "Right hand (back) 180.png": "embedded\u002F0d67d872e6e09c47754c8da91fe950cbd2352a811a054176d522ac2c6ea3ec66.png",
              "Right back (180) .png": "embedded\u002F9a686f4c894816948bf9a0556436967d0893cf31307cc24b1b57d692fe24d806.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 0.png": "embedded\u002F79b9acf15bff6377b47627132ca7489c54a5f91119f9a13fa37db8742452b2b4.png",
              "Left palm (0).png": "embedded\u002Fbcc3a707592fd0c7afb4c8e694c1c915c511b90bb5c6d5e8e88de0eed9967742.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 L.png": "embedded\u002Fccc572a055b828897347233d7bc728cd303182fed18369b07d89a9c1404f4add.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 645.69,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trialtext",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90M.png": "embedded\u002Fbbeee3a9fa0b30ce4d3c604e1aa83491efd7a2815fd5074ad623db22d0dee731.png",
              "Right palm (0) .png": "embedded\u002F70e4525a86fa9bb646501826e6d15735abda92243c4c05caaa4427caf526ab5e.png",
              "Left palm (90M).png": "embedded\u002Ff0ee9d4a29d94257614bc4116800e31812c85e3b2ca474f89edf8425c87165eb.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 M.png": "embedded\u002F75214c42852c33a3cdfa86631b982c7e248963dff00e1f7a6efba85d4e7874b9.png",
              "Right palm (90M).png": "embedded\u002F6477efe8874605841efccd8b77b0c7d98145b25938a0766f8a731a8f16abab62.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 180.png": "embedded\u002F8bd551c626531fb249c5af108e23ac400844d72815b7e8660dd2c454879c15ee.png",
              "Left Palm (180).png": "embedded\u002F4fd7d8d00a5c05cbb219849f5ada9a881a8401db3e91badfd8157e1638a847d2.png",
              "Left palm (180)  .png": "embedded\u002F501a086959769b62eae2cc8c1d5bbf7baacf35920083759a3a4040f9d53f549f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 90 L .png": "embedded\u002Fee0fcb00faa90a6e1bfefa91a4ad0a3e6cc06d407a369e3587fc8dfbfc7fc2a9.png",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90L)  .png": "embedded\u002F17123593b25ce91f8442a731bd9aae4d87b23e2a2c13a6e15495a0c4d22cfa83.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 M.png": "embedded\u002Fc5e945da31cac8a6e8e6803f3387dc9ce6459fa7d6dff858514fd5c3041c9458.png",
              "Left back (90M) .png": "embedded\u002Ff27655ceec55969b6ce7bbd8442551cbeb3a7267eb1ad8a4acf7f82223d8c5dc.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "Left back (90M).png": "embedded\u002F756a7f8ebc4812d12c50483143d5134e46249390a139859adde193f3357bd2a9.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 11,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 0.png": "embedded\u002Fa90aa3ebbd3af2a9aa6fac9d5fc61c6c9c69666a8b77cb3ea085dd4200b1be1a.png",
              "Right back (0)  .png": "embedded\u002F65c6411e986708ae6782595d796620ff74a18341f8206bd2a796ab1a75ac5a38.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (0)",
            "correctResponse": "l"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90 L.png": "embedded\u002F860c4d7ccbaa6632ecc58d516914ec61417c9ad0df45dcec4f1aada62b1c6241.png",
              "Left Palm (90L).png": "embedded\u002F9e4170f7ef0b059cd57af6d076d0adda71eaf7c02f8b4c9ca1ee19a347a9d472.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 10,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 0.png": "embedded\u002F4e941ee148317da4c096004f91babb1f979db4c6666d3dd6cdd86489bd8101f3.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (0)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (180).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 180.png": "embedded\u002F25ea8822992e611c82ed154fd0041990066a6485577016ace0283422ec02ba26.png",
              "Right palm (180).png": "embedded\u002F07ad04dc34416af04c629ec7d00b10813f6cacb0760f1d125c2a5f9e95094537.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 10,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 0.png": "embedded\u002F4e941ee148317da4c096004f91babb1f979db4c6666d3dd6cdd86489bd8101f3.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (0)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90 L.png": "embedded\u002F860c4d7ccbaa6632ecc58d516914ec61417c9ad0df45dcec4f1aada62b1c6241.png",
              "Left Palm (90L).png": "embedded\u002F9e4170f7ef0b059cd57af6d076d0adda71eaf7c02f8b4c9ca1ee19a347a9d472.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -13,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (180) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black_background.png": "embedded\u002Fe71caa9433e8e3a76171f4a36a5c5655a4f8dab5d62d68c40f0096360777f123.png",
              "Right hand (back) 180.png": "embedded\u002F0d67d872e6e09c47754c8da91fe950cbd2352a811a054176d522ac2c6ea3ec66.png",
              "Right back (180) .png": "embedded\u002F9a686f4c894816948bf9a0556436967d0893cf31307cc24b1b57d692fe24d806.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 11,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 0.png": "embedded\u002Fa90aa3ebbd3af2a9aa6fac9d5fc61c6c9c69666a8b77cb3ea085dd4200b1be1a.png",
              "Right back (0)  .png": "embedded\u002F65c6411e986708ae6782595d796620ff74a18341f8206bd2a796ab1a75ac5a38.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (0)",
            "correctResponse": "l"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 L.png": "embedded\u002Fccc572a055b828897347233d7bc728cd303182fed18369b07d89a9c1404f4add.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (180).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 180.png": "embedded\u002F25ea8822992e611c82ed154fd0041990066a6485577016ace0283422ec02ba26.png",
              "Right palm (180).png": "embedded\u002F07ad04dc34416af04c629ec7d00b10813f6cacb0760f1d125c2a5f9e95094537.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 0.png": "embedded\u002F79b9acf15bff6377b47627132ca7489c54a5f91119f9a13fa37db8742452b2b4.png",
              "Left palm (0).png": "embedded\u002Fbcc3a707592fd0c7afb4c8e694c1c915c511b90bb5c6d5e8e88de0eed9967742.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 M.png": "embedded\u002Fc5e945da31cac8a6e8e6803f3387dc9ce6459fa7d6dff858514fd5c3041c9458.png",
              "Left back (90M) .png": "embedded\u002Ff27655ceec55969b6ce7bbd8442551cbeb3a7267eb1ad8a4acf7f82223d8c5dc.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "Left back (90M).png": "embedded\u002F756a7f8ebc4812d12c50483143d5134e46249390a139859adde193f3357bd2a9.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90M.png": "embedded\u002Fbbeee3a9fa0b30ce4d3c604e1aa83491efd7a2815fd5074ad623db22d0dee731.png",
              "Right palm (0) .png": "embedded\u002F70e4525a86fa9bb646501826e6d15735abda92243c4c05caaa4427caf526ab5e.png",
              "Left palm (90M).png": "embedded\u002Ff0ee9d4a29d94257614bc4116800e31812c85e3b2ca474f89edf8425c87165eb.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 90 L .png": "embedded\u002Fee0fcb00faa90a6e1bfefa91a4ad0a3e6cc06d407a369e3587fc8dfbfc7fc2a9.png",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90L)  .png": "embedded\u002F17123593b25ce91f8442a731bd9aae4d87b23e2a2c13a6e15495a0c4d22cfa83.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "-18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 180.png": "embedded\u002Ff9e300054523a6a24ed51d6b700f7f06aa44b4b4a56dfbb8657ec6446d6f388e.png",
              "free-video-3045163.jpg": "embedded\u002F3e692b39dfb8ee628014a35ccbdd192ecad8fa85b07649fda792bf54ac549fe1.jpg",
              "Left back (180).png": "embedded\u002F0e65cea49ffac87c2e016d015e844cb997bb8d07408ab53023993ec03f0d205d.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 180.png": "embedded\u002F8bd551c626531fb249c5af108e23ac400844d72815b7e8660dd2c454879c15ee.png",
              "Left Palm (180).png": "embedded\u002F4fd7d8d00a5c05cbb219849f5ada9a881a8401db3e91badfd8157e1638a847d2.png",
              "Left palm (180)  .png": "embedded\u002F501a086959769b62eae2cc8c1d5bbf7baacf35920083759a3a4040f9d53f549f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 M.png": "embedded\u002F75214c42852c33a3cdfa86631b982c7e248963dff00e1f7a6efba85d4e7874b9.png",
              "Right palm (90M).png": "embedded\u002F6477efe8874605841efccd8b77b0c7d98145b25938a0766f8a731a8f16abab62.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 0.png": "embedded\u002Ffffc1a8f96e7aa571fd03335f30491483addd778c62db68ef5447ab3f7cf7376.png",
              "Left back (0) .png": "embedded\u002F616a9928372cf15de331e6a5690c7111a64988b57339f3d8f882f5db2a3b8315.png",
              "Left back (0)  .png": "embedded\u002F654e0d3273700abc55bf2a28246f38e4f43c182bf29152dd0407778d9253966f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 L.png": "embedded\u002Fd06f3deb411609444e0999722c2c3affb750f968face3014966e9200a78d3d88.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002Fa0f94a40a456799f57626c2ecf05959d7fd58c5c58cc6fb669c480f5d51e8f64.jpeg",
              "Right hand (back) 90 M.png": "embedded\u002Faad40d91beedbe86c1a2b5483a246274106a7984f72d99d80ac4a1e943f1788e.png",
              "download.png": "embedded\u002F9685787f0d3c9390b31922b8d64b17c0f1487727fb21de7abb246e9f65106b79.png",
              "plain-black-background-1580x1080.jpg": "embedded\u002F23269b7760b48bf6ccebf0e91eac6ae61a6c5ce4c3465032043e1813eae8b9c7.jpg",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90M).png": "embedded\u002Ff7f8694152f67809921752d8fe09a9028ffd77794275e9b8658223d7322d8d19.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90M)",
            "correctResponse": "k"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Repetition": "1",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop 2",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002Fa0f94a40a456799f57626c2ecf05959d7fd58c5c58cc6fb669c480f5d51e8f64.jpeg",
              "Right hand (back) 90 M.png": "embedded\u002Faad40d91beedbe86c1a2b5483a246274106a7984f72d99d80ac4a1e943f1788e.png",
              "download.png": "embedded\u002F9685787f0d3c9390b31922b8d64b17c0f1487727fb21de7abb246e9f65106b79.png",
              "plain-black-background-1580x1080.jpg": "embedded\u002F23269b7760b48bf6ccebf0e91eac6ae61a6c5ce4c3465032043e1813eae8b9c7.jpg",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90M).png": "embedded\u002Ff7f8694152f67809921752d8fe09a9028ffd77794275e9b8658223d7322d8d19.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 0.png": "embedded\u002Ffffc1a8f96e7aa571fd03335f30491483addd778c62db68ef5447ab3f7cf7376.png",
              "Left back (0) .png": "embedded\u002F616a9928372cf15de331e6a5690c7111a64988b57339f3d8f882f5db2a3b8315.png",
              "Left back (0)  .png": "embedded\u002F654e0d3273700abc55bf2a28246f38e4f43c182bf29152dd0407778d9253966f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 L.png": "embedded\u002Fd06f3deb411609444e0999722c2c3affb750f968face3014966e9200a78d3d88.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 L.png": "embedded\u002Fccc572a055b828897347233d7bc728cd303182fed18369b07d89a9c1404f4add.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 0.png": "embedded\u002F79b9acf15bff6377b47627132ca7489c54a5f91119f9a13fa37db8742452b2b4.png",
              "Left palm (0).png": "embedded\u002Fbcc3a707592fd0c7afb4c8e694c1c915c511b90bb5c6d5e8e88de0eed9967742.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -13,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (180) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black_background.png": "embedded\u002Fe71caa9433e8e3a76171f4a36a5c5655a4f8dab5d62d68c40f0096360777f123.png",
              "Right hand (back) 180.png": "embedded\u002F0d67d872e6e09c47754c8da91fe950cbd2352a811a054176d522ac2c6ea3ec66.png",
              "Right back (180) .png": "embedded\u002F9a686f4c894816948bf9a0556436967d0893cf31307cc24b1b57d692fe24d806.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "-18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 180.png": "embedded\u002Ff9e300054523a6a24ed51d6b700f7f06aa44b4b4a56dfbb8657ec6446d6f388e.png",
              "free-video-3045163.jpg": "embedded\u002F3e692b39dfb8ee628014a35ccbdd192ecad8fa85b07649fda792bf54ac549fe1.jpg",
              "Left back (180).png": "embedded\u002F0e65cea49ffac87c2e016d015e844cb997bb8d07408ab53023993ec03f0d205d.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 645.69,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trialtext",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 M.png": "embedded\u002F75214c42852c33a3cdfa86631b982c7e248963dff00e1f7a6efba85d4e7874b9.png",
              "Right palm (90M).png": "embedded\u002F6477efe8874605841efccd8b77b0c7d98145b25938a0766f8a731a8f16abab62.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90M.png": "embedded\u002Fbbeee3a9fa0b30ce4d3c604e1aa83491efd7a2815fd5074ad623db22d0dee731.png",
              "Right palm (0) .png": "embedded\u002F70e4525a86fa9bb646501826e6d15735abda92243c4c05caaa4427caf526ab5e.png",
              "Left palm (90M).png": "embedded\u002Ff0ee9d4a29d94257614bc4116800e31812c85e3b2ca474f89edf8425c87165eb.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 180.png": "embedded\u002F8bd551c626531fb249c5af108e23ac400844d72815b7e8660dd2c454879c15ee.png",
              "Left Palm (180).png": "embedded\u002F4fd7d8d00a5c05cbb219849f5ada9a881a8401db3e91badfd8157e1638a847d2.png",
              "Left palm (180)  .png": "embedded\u002F501a086959769b62eae2cc8c1d5bbf7baacf35920083759a3a4040f9d53f549f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 11,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 0.png": "embedded\u002Fa90aa3ebbd3af2a9aa6fac9d5fc61c6c9c69666a8b77cb3ea085dd4200b1be1a.png",
              "Right back (0)  .png": "embedded\u002F65c6411e986708ae6782595d796620ff74a18341f8206bd2a796ab1a75ac5a38.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (0)",
            "correctResponse": "l"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 M.png": "embedded\u002Fc5e945da31cac8a6e8e6803f3387dc9ce6459fa7d6dff858514fd5c3041c9458.png",
              "Left back (90M) .png": "embedded\u002Ff27655ceec55969b6ce7bbd8442551cbeb3a7267eb1ad8a4acf7f82223d8c5dc.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "Left back (90M).png": "embedded\u002F756a7f8ebc4812d12c50483143d5134e46249390a139859adde193f3357bd2a9.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 90 L .png": "embedded\u002Fee0fcb00faa90a6e1bfefa91a4ad0a3e6cc06d407a369e3587fc8dfbfc7fc2a9.png",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90L)  .png": "embedded\u002F17123593b25ce91f8442a731bd9aae4d87b23e2a2c13a6e15495a0c4d22cfa83.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90 L.png": "embedded\u002F860c4d7ccbaa6632ecc58d516914ec61417c9ad0df45dcec4f1aada62b1c6241.png",
              "Left Palm (90L).png": "embedded\u002F9e4170f7ef0b059cd57af6d076d0adda71eaf7c02f8b4c9ca1ee19a347a9d472.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (180).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 180.png": "embedded\u002F25ea8822992e611c82ed154fd0041990066a6485577016ace0283422ec02ba26.png",
              "Right palm (180).png": "embedded\u002F07ad04dc34416af04c629ec7d00b10813f6cacb0760f1d125c2a5f9e95094537.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 10,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 0.png": "embedded\u002F4e941ee148317da4c096004f91babb1f979db4c6666d3dd6cdd86489bd8101f3.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (0)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90 L.png": "embedded\u002F860c4d7ccbaa6632ecc58d516914ec61417c9ad0df45dcec4f1aada62b1c6241.png",
              "Left Palm (90L).png": "embedded\u002F9e4170f7ef0b059cd57af6d076d0adda71eaf7c02f8b4c9ca1ee19a347a9d472.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 10,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 0.png": "embedded\u002F4e941ee148317da4c096004f91babb1f979db4c6666d3dd6cdd86489bd8101f3.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (0)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -13,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (180) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black_background.png": "embedded\u002Fe71caa9433e8e3a76171f4a36a5c5655a4f8dab5d62d68c40f0096360777f123.png",
              "Right hand (back) 180.png": "embedded\u002F0d67d872e6e09c47754c8da91fe950cbd2352a811a054176d522ac2c6ea3ec66.png",
              "Right back (180) .png": "embedded\u002F9a686f4c894816948bf9a0556436967d0893cf31307cc24b1b57d692fe24d806.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 11,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 0.png": "embedded\u002Fa90aa3ebbd3af2a9aa6fac9d5fc61c6c9c69666a8b77cb3ea085dd4200b1be1a.png",
              "Right back (0)  .png": "embedded\u002F65c6411e986708ae6782595d796620ff74a18341f8206bd2a796ab1a75ac5a38.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (0)",
            "correctResponse": "l"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 M.png": "embedded\u002Fc5e945da31cac8a6e8e6803f3387dc9ce6459fa7d6dff858514fd5c3041c9458.png",
              "Left back (90M) .png": "embedded\u002Ff27655ceec55969b6ce7bbd8442551cbeb3a7267eb1ad8a4acf7f82223d8c5dc.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "Left back (90M).png": "embedded\u002F756a7f8ebc4812d12c50483143d5134e46249390a139859adde193f3357bd2a9.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (180).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 180.png": "embedded\u002F25ea8822992e611c82ed154fd0041990066a6485577016ace0283422ec02ba26.png",
              "Right palm (180).png": "embedded\u002F07ad04dc34416af04c629ec7d00b10813f6cacb0760f1d125c2a5f9e95094537.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 0.png": "embedded\u002F79b9acf15bff6377b47627132ca7489c54a5f91119f9a13fa37db8742452b2b4.png",
              "Left palm (0).png": "embedded\u002Fbcc3a707592fd0c7afb4c8e694c1c915c511b90bb5c6d5e8e88de0eed9967742.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 L.png": "embedded\u002Fccc572a055b828897347233d7bc728cd303182fed18369b07d89a9c1404f4add.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90M.png": "embedded\u002Fbbeee3a9fa0b30ce4d3c604e1aa83491efd7a2815fd5074ad623db22d0dee731.png",
              "Right palm (0) .png": "embedded\u002F70e4525a86fa9bb646501826e6d15735abda92243c4c05caaa4427caf526ab5e.png",
              "Left palm (90M).png": "embedded\u002Ff0ee9d4a29d94257614bc4116800e31812c85e3b2ca474f89edf8425c87165eb.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 90 L .png": "embedded\u002Fee0fcb00faa90a6e1bfefa91a4ad0a3e6cc06d407a369e3587fc8dfbfc7fc2a9.png",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90L)  .png": "embedded\u002F17123593b25ce91f8442a731bd9aae4d87b23e2a2c13a6e15495a0c4d22cfa83.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "-18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 180.png": "embedded\u002Ff9e300054523a6a24ed51d6b700f7f06aa44b4b4a56dfbb8657ec6446d6f388e.png",
              "free-video-3045163.jpg": "embedded\u002F3e692b39dfb8ee628014a35ccbdd192ecad8fa85b07649fda792bf54ac549fe1.jpg",
              "Left back (180).png": "embedded\u002F0e65cea49ffac87c2e016d015e844cb997bb8d07408ab53023993ec03f0d205d.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 180.png": "embedded\u002F8bd551c626531fb249c5af108e23ac400844d72815b7e8660dd2c454879c15ee.png",
              "Left Palm (180).png": "embedded\u002F4fd7d8d00a5c05cbb219849f5ada9a881a8401db3e91badfd8157e1638a847d2.png",
              "Left palm (180)  .png": "embedded\u002F501a086959769b62eae2cc8c1d5bbf7baacf35920083759a3a4040f9d53f549f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 L.png": "embedded\u002Fd06f3deb411609444e0999722c2c3affb750f968face3014966e9200a78d3d88.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 M.png": "embedded\u002F75214c42852c33a3cdfa86631b982c7e248963dff00e1f7a6efba85d4e7874b9.png",
              "Right palm (90M).png": "embedded\u002F6477efe8874605841efccd8b77b0c7d98145b25938a0766f8a731a8f16abab62.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 0.png": "embedded\u002Ffffc1a8f96e7aa571fd03335f30491483addd778c62db68ef5447ab3f7cf7376.png",
              "Left back (0) .png": "embedded\u002F616a9928372cf15de331e6a5690c7111a64988b57339f3d8f882f5db2a3b8315.png",
              "Left back (0)  .png": "embedded\u002F654e0d3273700abc55bf2a28246f38e4f43c182bf29152dd0407778d9253966f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002Fa0f94a40a456799f57626c2ecf05959d7fd58c5c58cc6fb669c480f5d51e8f64.jpeg",
              "Right hand (back) 90 M.png": "embedded\u002Faad40d91beedbe86c1a2b5483a246274106a7984f72d99d80ac4a1e943f1788e.png",
              "download.png": "embedded\u002F9685787f0d3c9390b31922b8d64b17c0f1487727fb21de7abb246e9f65106b79.png",
              "plain-black-background-1580x1080.jpg": "embedded\u002F23269b7760b48bf6ccebf0e91eac6ae61a6c5ce4c3465032043e1813eae8b9c7.jpg",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90M).png": "embedded\u002Ff7f8694152f67809921752d8fe09a9028ffd77794275e9b8658223d7322d8d19.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90M)",
            "correctResponse": "k"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Repetition": "1",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop 3",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -13,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (180) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black_background.png": "embedded\u002Fe71caa9433e8e3a76171f4a36a5c5655a4f8dab5d62d68c40f0096360777f123.png",
              "Right hand (back) 180.png": "embedded\u002F0d67d872e6e09c47754c8da91fe950cbd2352a811a054176d522ac2c6ea3ec66.png",
              "Right back (180) .png": "embedded\u002F9a686f4c894816948bf9a0556436967d0893cf31307cc24b1b57d692fe24d806.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 180.png": "embedded\u002F8bd551c626531fb249c5af108e23ac400844d72815b7e8660dd2c454879c15ee.png",
              "Left Palm (180).png": "embedded\u002F4fd7d8d00a5c05cbb219849f5ada9a881a8401db3e91badfd8157e1638a847d2.png",
              "Left palm (180)  .png": "embedded\u002F501a086959769b62eae2cc8c1d5bbf7baacf35920083759a3a4040f9d53f549f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 11,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 0.png": "embedded\u002Fa90aa3ebbd3af2a9aa6fac9d5fc61c6c9c69666a8b77cb3ea085dd4200b1be1a.png",
              "Right back (0)  .png": "embedded\u002F65c6411e986708ae6782595d796620ff74a18341f8206bd2a796ab1a75ac5a38.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (0)",
            "correctResponse": "l"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 L.png": "embedded\u002Fccc572a055b828897347233d7bc728cd303182fed18369b07d89a9c1404f4add.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 0.png": "embedded\u002F79b9acf15bff6377b47627132ca7489c54a5f91119f9a13fa37db8742452b2b4.png",
              "Left palm (0).png": "embedded\u002Fbcc3a707592fd0c7afb4c8e694c1c915c511b90bb5c6d5e8e88de0eed9967742.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002Fa0f94a40a456799f57626c2ecf05959d7fd58c5c58cc6fb669c480f5d51e8f64.jpeg",
              "Right hand (back) 90 M.png": "embedded\u002Faad40d91beedbe86c1a2b5483a246274106a7984f72d99d80ac4a1e943f1788e.png",
              "download.png": "embedded\u002F9685787f0d3c9390b31922b8d64b17c0f1487727fb21de7abb246e9f65106b79.png",
              "plain-black-background-1580x1080.jpg": "embedded\u002F23269b7760b48bf6ccebf0e91eac6ae61a6c5ce4c3465032043e1813eae8b9c7.jpg",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90M).png": "embedded\u002Ff7f8694152f67809921752d8fe09a9028ffd77794275e9b8658223d7322d8d19.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 0.png": "embedded\u002Ffffc1a8f96e7aa571fd03335f30491483addd778c62db68ef5447ab3f7cf7376.png",
              "Left back (0) .png": "embedded\u002F616a9928372cf15de331e6a5690c7111a64988b57339f3d8f882f5db2a3b8315.png",
              "Left back (0)  .png": "embedded\u002F654e0d3273700abc55bf2a28246f38e4f43c182bf29152dd0407778d9253966f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 645.69,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trialtext",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 M.png": "embedded\u002F75214c42852c33a3cdfa86631b982c7e248963dff00e1f7a6efba85d4e7874b9.png",
              "Right palm (90M).png": "embedded\u002F6477efe8874605841efccd8b77b0c7d98145b25938a0766f8a731a8f16abab62.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90M.png": "embedded\u002Fbbeee3a9fa0b30ce4d3c604e1aa83491efd7a2815fd5074ad623db22d0dee731.png",
              "Right palm (0) .png": "embedded\u002F70e4525a86fa9bb646501826e6d15735abda92243c4c05caaa4427caf526ab5e.png",
              "Left palm (90M).png": "embedded\u002Ff0ee9d4a29d94257614bc4116800e31812c85e3b2ca474f89edf8425c87165eb.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "-18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 180.png": "embedded\u002Ff9e300054523a6a24ed51d6b700f7f06aa44b4b4a56dfbb8657ec6446d6f388e.png",
              "free-video-3045163.jpg": "embedded\u002F3e692b39dfb8ee628014a35ccbdd192ecad8fa85b07649fda792bf54ac549fe1.jpg",
              "Left back (180).png": "embedded\u002F0e65cea49ffac87c2e016d015e844cb997bb8d07408ab53023993ec03f0d205d.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 L.png": "embedded\u002Fd06f3deb411609444e0999722c2c3affb750f968face3014966e9200a78d3d88.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 M.png": "embedded\u002Fc5e945da31cac8a6e8e6803f3387dc9ce6459fa7d6dff858514fd5c3041c9458.png",
              "Left back (90M) .png": "embedded\u002Ff27655ceec55969b6ce7bbd8442551cbeb3a7267eb1ad8a4acf7f82223d8c5dc.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "Left back (90M).png": "embedded\u002F756a7f8ebc4812d12c50483143d5134e46249390a139859adde193f3357bd2a9.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (180).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 180.png": "embedded\u002F25ea8822992e611c82ed154fd0041990066a6485577016ace0283422ec02ba26.png",
              "Right palm (180).png": "embedded\u002F07ad04dc34416af04c629ec7d00b10813f6cacb0760f1d125c2a5f9e95094537.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90 L.png": "embedded\u002F860c4d7ccbaa6632ecc58d516914ec61417c9ad0df45dcec4f1aada62b1c6241.png",
              "Left Palm (90L).png": "embedded\u002F9e4170f7ef0b059cd57af6d076d0adda71eaf7c02f8b4c9ca1ee19a347a9d472.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 90 L .png": "embedded\u002Fee0fcb00faa90a6e1bfefa91a4ad0a3e6cc06d407a369e3587fc8dfbfc7fc2a9.png",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90L)  .png": "embedded\u002F17123593b25ce91f8442a731bd9aae4d87b23e2a2c13a6e15495a0c4d22cfa83.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 11,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 0.png": "embedded\u002Fa90aa3ebbd3af2a9aa6fac9d5fc61c6c9c69666a8b77cb3ea085dd4200b1be1a.png",
              "Right back (0)  .png": "embedded\u002F65c6411e986708ae6782595d796620ff74a18341f8206bd2a796ab1a75ac5a38.png",
              "Right back (0) .png": "embedded\u002Fad929b0dff05f6721f15b1c405e7efc7f82dd32b82e2b404a986c27e7b564788.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (0)",
            "correctResponse": "l"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90 L.png": "embedded\u002F860c4d7ccbaa6632ecc58d516914ec61417c9ad0df45dcec4f1aada62b1c6241.png",
              "Left Palm (90L).png": "embedded\u002F9e4170f7ef0b059cd57af6d076d0adda71eaf7c02f8b4c9ca1ee19a347a9d472.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90L)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 10,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 0.png": "embedded\u002F4e941ee148317da4c096004f91babb1f979db4c6666d3dd6cdd86489bd8101f3.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (0)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -13,
                "angle": 0,
                "width": 447,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (180) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black_background.png": "embedded\u002Fe71caa9433e8e3a76171f4a36a5c5655a4f8dab5d62d68c40f0096360777f123.png",
              "Right hand (back) 180.png": "embedded\u002F0d67d872e6e09c47754c8da91fe950cbd2352a811a054176d522ac2c6ea3ec66.png",
              "Right back (180) .png": "embedded\u002F9a686f4c894816948bf9a0556436967d0893cf31307cc24b1b57d692fe24d806.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 10,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 0.png": "embedded\u002F4e941ee148317da4c096004f91babb1f979db4c6666d3dd6cdd86489bd8101f3.png",
              "Right palm (0) .png": "embedded\u002Ff618a72c02033033abb67d39f680f821ac7b777839f7b1ff7d5bcfca7f25ae80.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (0)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 M.png": "embedded\u002Fc5e945da31cac8a6e8e6803f3387dc9ce6459fa7d6dff858514fd5c3041c9458.png",
              "Left back (90M) .png": "embedded\u002Ff27655ceec55969b6ce7bbd8442551cbeb3a7267eb1ad8a4acf7f82223d8c5dc.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "Left back (90M).png": "embedded\u002F756a7f8ebc4812d12c50483143d5134e46249390a139859adde193f3357bd2a9.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 428,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (180).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 180.png": "embedded\u002F25ea8822992e611c82ed154fd0041990066a6485577016ace0283422ec02ba26.png",
              "Right palm (180).png": "embedded\u002F07ad04dc34416af04c629ec7d00b10813f6cacb0760f1d125c2a5f9e95094537.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (180)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 13,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 0.png": "embedded\u002F79b9acf15bff6377b47627132ca7489c54a5f91119f9a13fa37db8742452b2b4.png",
              "Left palm (0).png": "embedded\u002Fbcc3a707592fd0c7afb4c8e694c1c915c511b90bb5c6d5e8e88de0eed9967742.png",
              "Left palm (0) .png": "embedded\u002F3dd2db6fa7f779a92c732e7af4ffd959a6824f5ba52c7f588a98b8878334b23c.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "-18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 180.png": "embedded\u002Ff9e300054523a6a24ed51d6b700f7f06aa44b4b4a56dfbb8657ec6446d6f388e.png",
              "free-video-3045163.jpg": "embedded\u002F3e692b39dfb8ee628014a35ccbdd192ecad8fa85b07649fda792bf54ac549fe1.jpg",
              "Left back (180).png": "embedded\u002F0e65cea49ffac87c2e016d015e844cb997bb8d07408ab53023993ec03f0d205d.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 426,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 90M.png": "embedded\u002Fbbeee3a9fa0b30ce4d3c604e1aa83491efd7a2815fd5074ad623db22d0dee731.png",
              "Right palm (0) .png": "embedded\u002F70e4525a86fa9bb646501826e6d15735abda92243c4c05caaa4427caf526ab5e.png",
              "Left palm (90M).png": "embedded\u002Ff0ee9d4a29d94257614bc4116800e31812c85e3b2ca474f89edf8425c87165eb.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (90M)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90L)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (back) 90 L .png": "embedded\u002Fee0fcb00faa90a6e1bfefa91a4ad0a3e6cc06d407a369e3587fc8dfbfc7fc2a9.png",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90L)  .png": "embedded\u002F17123593b25ce91f8442a731bd9aae4d87b23e2a2c13a6e15495a0c4d22cfa83.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 447,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right back (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002Fa0f94a40a456799f57626c2ecf05959d7fd58c5c58cc6fb669c480f5d51e8f64.jpeg",
              "Right hand (back) 90 M.png": "embedded\u002Faad40d91beedbe86c1a2b5483a246274106a7984f72d99d80ac4a1e943f1788e.png",
              "download.png": "embedded\u002F9685787f0d3c9390b31922b8d64b17c0f1487727fb21de7abb246e9f65106b79.png",
              "plain-black-background-1580x1080.jpg": "embedded\u002F23269b7760b48bf6ccebf0e91eac6ae61a6c5ce4c3465032043e1813eae8b9c7.jpg",
              "Right hand (back) 90 L.png": "embedded\u002Fe9b2751f4c36b78e1d093324dedf4fd5ecd0e07de134ed1a4b536bbf8595a96b.png",
              "Right back (90M).png": "embedded\u002Ff7f8694152f67809921752d8fe09a9028ffd77794275e9b8658223d7322d8d19.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand back (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": -12,
                "angle": 0,
                "width": 426,
                "height": 578,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left palm (180)  .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (Palm) 180.png": "embedded\u002F8bd551c626531fb249c5af108e23ac400844d72815b7e8660dd2c454879c15ee.png",
              "Left Palm (180).png": "embedded\u002F4fd7d8d00a5c05cbb219849f5ada9a881a8401db3e91badfd8157e1638a847d2.png",
              "Left palm (180)  .png": "embedded\u002F501a086959769b62eae2cc8c1d5bbf7baacf35920083759a3a4040f9d53f549f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png",
              "Left back (180)  .png": "embedded\u002F316b98c878a0f9ff9c2d320ada5ccf713abf7ff0bdc6a070dc739cbee8ce3261.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand palm (180)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 L.png": "embedded\u002Fd06f3deb411609444e0999722c2c3affb750f968face3014966e9200a78d3d88.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "Left palm (90L)  .png": "embedded\u002Fac464896a5d016cc3ad9be9ef5cc182d5ef3b8a594fea324169adab34a208f91.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90L)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 578,
                "height": 428,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Right palm (90M).png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Right hand (palm) 90 M.png": "embedded\u002F75214c42852c33a3cdfa86631b982c7e248963dff00e1f7a6efba85d4e7874b9.png",
              "Right palm (90M).png": "embedded\u002F6477efe8874605841efccd8b77b0c7d98145b25938a0766f8a731a8f16abab62.png",
              "Right palm (90L) .png": "embedded\u002F39726aca09ac7dc42a190c278cdfb5888256640805c0cec220970d8b523100a0.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Right hand palm (90M)",
            "correctResponse": "k"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": "18",
                "angle": 0,
                "width": 408,
                "height": 565,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (0) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 0.png": "embedded\u002Ffffc1a8f96e7aa571fd03335f30491483addd778c62db68ef5447ab3f7cf7376.png",
              "Left back (0) .png": "embedded\u002F616a9928372cf15de331e6a5690c7111a64988b57339f3d8f882f5db2a3b8315.png",
              "Left back (0)  .png": "embedded\u002F654e0d3273700abc55bf2a28246f38e4f43c182bf29152dd0407778d9253966f.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (0)",
            "correctResponse": "a"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "v",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 594.11,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Press the space key to begin the next trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png",
              "Screen Shot 2021-01-14 at 10.24.28 PM.png": "embedded\u002F050059c108da5aa1dbe48bb16ad7fe15e83b2f8b744704698e3ada93db5d1de9.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1286,
                "height": 723,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 1264,
                "height": 717,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"black screen.png\"] }"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 565,
                "height": 408,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Left back (90L) .png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "download.jpeg": "embedded\u002F7d2af7fd89ce2e66a7c6164219e6ee632123f9eccfa42c335f281d1adcd16bbc.jpeg",
              "Left Hand (back) 90 L.png": "embedded\u002Fccc572a055b828897347233d7bc728cd303182fed18369b07d89a9c1404f4add.png",
              "Left back (90L) .png": "embedded\u002F90f53fcf7095411cef78bf4c571ff68651fc5f7c5a5250d9db40d4abf8af94af.png",
              "black screen.png": "embedded\u002F389457603827bd4fe718175c6bd624150bb96ec556eb56893ce1b57f0f5a2f13.png"
            },
            "responses": {
              "keypress(k)": "right",
              "keypress(a)": "left"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Left hand back (90L)",
            "correctResponse": "a"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbutton id=\"Continue\"\u003EContinue\u003C\u002Fbutton\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* Download data to firebase */
this.options.events['click button#Continue'] = function sendToFirebase() {
    const rng = new lab.util.Random();
  
  firebase.database().ref(rng.uuid4()).set({
    data: this.options.datastore.exportJson()
    });

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Page"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\n\u003Cmain class=\"content-vertical-center content-horizontal-center\" style=\"font-size: 3rem;\"\u003E\n\n\n  \u003Cp\u003E\n    Thank you for participating!\n  \u003C\u002Fp\u003E\n\n\n\u003C\u002Fmain\u003E\n\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Debriefing Form →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Thank you"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Debriefing Form",
          "content": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "text",
          "content": "Thank you for participating in this study. The purpose of this study was to measure the ability to mentally stimulate movements without actually executing them. To test this action stimulation, we used the hand laterality task. In this task, participants are shown left- and right-hand mirror images from two different viewpoints (palm and back) and in different orientations. They have to identify whether the image presented is of the left hand or the right hand. What is currently lacking in this area is a clear understanding of how this action stimulation affects normal aging. Specifically, this study sought to expand current understandings of the relationship between the ability to mentally stimulate movements and normal aging using the hand laterality task. We expect to see that older adults will be less accurate and have slower reaction times than younger adults in their left-right hand judgments when presented with hand-stimuli in the most difficult conditions. We also expect males to respond faster than females in judging hands portrayed from the palm. Additionally, we expect females to be faster than males in judging hands portrayed from the back. Thank you again for participating and have a great day."
        },
        {
          "required": true,
          "type": "text",
          "content": "If you have any questions about this study, please feel free to contact us: "
        },
        {
          "required": true,
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "Aneet Saran (MA Student, Psychology, University of Manitoba, \u003Ca href=\"mailto:sarana3@myumanitoba.ca\"\u003Esarana3@myumanitoba.ca\u003C\u002Fa\u003E\u003C\u002Fli\u003E)",
          "name": ""
        },
        {
          "required": true,
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "Dr. Jonathan Marotta (Professor, Psychology, University of Manitoba, \u003Ca href=\"mailto:sarana3@myumanitoba.ca\"\u003Ejonathan.marotta@umanitoba.ca\u003C\u002Fa\u003E\u003C\u002Fli\u003E)",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": " Please exit by pressing 'esc' and then close your browser window. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing form ",
      "skip": "${this.state['Participant_Consent'] == '1'}"
    }
  ]
})

// Let's go!
study.run()