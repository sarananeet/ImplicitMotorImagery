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
          "content": "Aneet Saran, PhD student, Psychology \nUniversity of Manitoba\n(204) 998-0912\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "Stephen Wood, MA student, Psychology \nUniversity of Manitoba"
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
          "title": "SOURCE OF SUPPORT: Research Manitoba & Natural Sciences and Engineering Research Council of Canada (NSERC)",
          "content": "This document contains important information about in-person research during the COVID-19 public health crisis. COVID-19 (also called SARS-CoV2) is an illness caused by the coronavirus. Coronaviruses are most commonly spread from an infected person through: a) respiratory droplets when you cough or sneeze; b) close personal contact, such as touching or shaking hands; or c) touching something with the virus on it, then touching your eyes, nose or mouth before washing your hands. "
        },
        {
          "required": true,
          "type": "text",
          "content": "The University of Manitoba is committed to taking measures to protect the health and safety of their campuses and the wider community. Your safety is important to us. The university has suspended most research that cannot be conducted remotely or virtually. This project requires in-person visits. Therefore, it is important to understand that your participation in this study may increase your exposure to COVID-19."
        },
        {
          "required": true,
          "type": "text",
          "content": "This consent form is only part of the process of informed consent. It should give you the basic idea of what the research is about and what your participation will involve. If you would like more detail about something mentioned here, or information not included here, you should feel free to ask. Please take the time to read this carefully and to understand any accompanying information. "
        },
        {
          "required": true,
          "type": "text",
          "title": "PURPOSE ",
          "content": "We are interested in how you judge hand images presented in different orientations."
        },
        {
          "required": true,
          "type": "text",
          "title": "DESCRIPTION: ",
          "content": "This study will take no longer than an hour. During the study, you will be required to judge hand images of left and right hands displayed from two different viewpoints (palm and back) and in four different orientations. Prior to this task, you will be asked to fill out a health questionnaire that will ask you about your age, gender, handedness, vision, and reaction time. In addition, you will be required to fill out a health questionnaire that will ask you about your physical and cognitive activities. Participants over the age of 65 will be given a list of questions to fill and write out about their memory and mental abilities. Participants recruited via the online Department of Psychology sign-up system will earn 1 experimental credit for their participation in this study. "
        },
        {
          "required": true,
          "type": "text",
          "content": "This research has been approved by the Psychology\u002FSociology Research Ethics Board of the University of Manitoba, our Faculty, the COVID Recovery Response Team, the COVID Recovery Steering Committee, and the University Provost. In order to gain approval, we created policies to ensure the safety of the research team and participants. These plans were reviewed and approved by the parties above. These precautions include:"
        },
        {
          "required": true,
          "type": "text",
          "content": "–\tAll researchers will wear 3-ply reusable or disposable masks during the experimental session"
        },
        {
          "required": true,
          "type": "text",
          "content": "–\tAll researchers will be fully vaccinated and will ask participants for their Manitoba immunization card or QR code"
        },
        {
          "required": true,
          "type": "text",
          "content": "–\tAll researchers will screen themselves for symptoms before any data collection session and will screen you for symptoms the day of their visit. "
        },
        {
          "required": true,
          "type": "text",
          "content": "–\tA COVID-19 screening questionnaire will be provided the day of the experimental session. If you answer no to all questions, data collection will proceed as scheduled. "
        },
        {
          "required": true,
          "type": "text",
          "content": "–\tDisinfected experimental equipment (a computer device) will be setup in the participant’s home while maintaining a 2-meter distance. Participants may use their own computer device if they prefer. "
        },
        {
          "required": true,
          "type": "text",
          "content": "–\tA researcher will monitor the experimental session from 2 meters away. Upon completion of the experiment, all equipment will be disinfected. The duration of the visit will be \u003C60 minutes."
        },
        {
          "required": true,
          "type": "text",
          "content": "–\tThroughout the experimental session, researchers will be following meticulous infection control practices, including disinfection, wearing gloves, and hand washing"
        },
        {
          "required": true,
          "type": "text",
          "content": "COVID-19 is a serious health threat, and the situation is evolving rapidly. If you feel that you are from a group that is more vulnerable to COVID-19 effects (e.g., senior (over the age of 60 years), immuno-compromised), please discuss your participation with the research team before providing your consent. You are under no obligation to participate and can change your mind about participating in the research at any time and without consequence. "
        },
        {
          "required": true,
          "type": "text",
          "content": "The University of Manitoba is closing watching the situation in Manitoba and may restrict in-person research at any time. We will continue to keep you informed as to changes that may occur to this study. If you have any concerns or complaints about this project you may contact any of the above- named persons or the Human Ethics Coordinator (HEC) by email: humanethics@umanitoba or by telephone: 204-474-7122. Please print a copy of this consent form for your records and reference. "
        },
        {
          "required": true,
          "type": "text",
          "title": "RISKS, CONFIDENTIALITY AND BENEFITS:",
          "content": "There is a possibility that during your participation in the study you could come into contact with someone with COVID-19. We are required to collect your personal contact information that we must retain in order to follow up with you and\u002For conduct contact tracing if you may have been exposed to COVID-19 in coming to the research site. We cannot guarantee anonymity as the personal contact information identifies you as a participant and we may be required to disclose this information in the event of a possible exposure. Identifying information will be stored separately from data with your code number. Your files will only be accessible by the investigators. Identifying information will be destroyed once the research is completed (estimation completion date May 2022). The data in this study will be anonymized and therefore does not need to be destroyed. The anonymized data will be made available, in accordance with journal and granting agency requirements. By participating in this study, you will be providing valuable data."
        },
        {
          "required": true,
          "type": "text",
          "title": "COSTS AND PAYMENTS: ",
          "content": "There are no fees or charges to participate in this study. Participants recruited via the online Department of Psychology sign-up system will earn 1 experimental credit for their participation in this study. "
        },
        {
          "required": true,
          "type": "text",
          "title": "WITHDRAW: ",
          "content": "You are free to withdraw from the study at any time, and \u002For refrain from answering any questions you prefer to omit, without prejudice or consequence. If you do withdraw from the study, we will still need to continue to maintain your contact information and will only give it to the University’s Environmental Health and Safety (EHS) Office and\u002For Manitoba Health if required for contact tracing. Please note, Manitoba Health or the University’s EHS office will not have access to your research data. Participants recruited via the online Department of Psychology sign-up system will still receive 1 participation credit if they choose to withdraw at any point from the study. "
        },
        {
          "required": true,
          "type": "radio",
          "help": "By selecting the 'I Consent' option, you are indicating that you have understood to your satisfaction the information regarding participation in the research project and agree to participate as a subject. In no way does this waive your legal rights nor release the researchers, sponsors, or involved institutions from their legal and professional responsibilities. ",
          "label": "VOLUNTARY CONSENT: ",
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
          "name": "voluntary-consent:"
        },
        {
          "required": false,
          "type": "input",
          "label": "If you would like to receive general summary of the results from this study when it is completed, please complete your mailing (or email) address below: ",
          "attributes": {
            "type": "email"
          },
          "name": "if-you-would-like-to-receive-general-summary-of-the-results-from-this-study-when-it-is-completed-please-complete-your-mailing-(or-email)-address-below:"
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
          "title": "Your task is to:"
        },
        {
          "required": true,
          "type": "html",
          "content": "2. Press the space key with your\n    \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand once the red circle is presented. \n",
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
          "": "1"
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "20"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Right",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
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
              "keypress(Space)": "right hand"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Circle "
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
          "title": "Your task is to:"
        },
        {
          "required": true,
          "type": "html",
          "content": "2. Press the space key with your\n    \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand once the red circle is presented. \n",
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
          "": "1"
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "20"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Left",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
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
                "width": 170,
                "height": 170,
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
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": ""
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(y)": "yes",
          "keypress(n)": "no"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
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
                "stroke": "#000000",
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
            "files": {},
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
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
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
          "content": "In this training phase, you will be presented with hand images in different orientations. Please refrain from physically moving your hands, and instead use your mental abilities to rotate your hands."
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
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";
}
      },
      "title": "Training phase 2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": ""
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(k)": "right",
          "keypress(a)": "left"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#000000",
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
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": "#000000",
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
            "files": {},
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
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(k)": "Right",
              "keypress(a)": "Left"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
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
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightPalm0"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftPalm0"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightback0"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftBack0"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightPalm180"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftPalm180"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftPalm90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightback90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightback180"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightback90L"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftBack90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftBack180"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftBack90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightPalm0"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftPalm0"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightback0"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftBack0"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightPalm190"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftPalm180"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftPalm90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightback90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightback180"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightback90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftBack90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftBack180"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftBack90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightPalm0"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftPalm0"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightback0"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftBack0"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightPalm180"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftPalm180"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftPalm90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightback90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightback180"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightback90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftBack90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftBack180"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftBack90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightPalm0"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftPalm0"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightback0"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftBack0"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightPalm180"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftPalm180"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftPalm90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightback90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightback180"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightback90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftBack90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftBack180"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftBack90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0_13_11zon.jpeg"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180_9_11zon.jpeg"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0_14_11zon"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180_4_11zon"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0_15_11zon"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180_12_11zon"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0_16_11zon"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180_1_11zon"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L_8_11zon"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M_7_11zon"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L_5_11zon"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M_6_11zon"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L_11_11zon.jpeg"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M_10_11zon"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M_3_11zon"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightPalm0"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftPalm0"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightback0"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftBack0"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightPalm180"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftPalm180"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftPalm90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightback90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightback180"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightback90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftBack90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftBack180"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftBack90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "ightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightPalm0"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftPalm0"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineRightback0"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "",
          "ImageName": "LineLeftBack0"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightPalm90L"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightPalm180"
        },
        {
          "Photo": "LineRightPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftPalm90M"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftPalm180"
        },
        {
          "Photo": "LineLeftPalm0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftPalm90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineRightback90L"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineRightback180"
        },
        {
          "Photo": "LineRightback0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineRightback90M"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "90",
          "ImageName": "LineLeftBack90L"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "180",
          "ImageName": "LineLeftBack180"
        },
        {
          "Photo": "LineLeftBack0.png",
          "H": "520",
          "V": "760",
          "D": "0",
          "R": "0",
          "A": "270",
          "ImageName": "LineLeftBack90L"
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(k)": "right",
          "keypress(a)": "left"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#000000",
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
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": "#000000",
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
            "files": {},
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
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(k)": "Right",
              "keypress(a)": "Left"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
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
          "content": "Aneet Saran (PhD Student, Psychology, University of Manitoba, \u003Ca href=\"mailto:sarana3@myumanitoba.ca\"\u003Esarana3@myumanitoba.ca\u003C\u002Fa\u003E\u003C\u002Fli\u003E)\n\nStephen Wood (MA Student, Psychology, University of Manitoba, \u003Ca href=\"mailto:woods1@myumanitoba.ca\"\u003Ewoods1@myumanitoba.ca\u003C\u002Fa\u003E\u003C\u002Fli\u003E)",
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