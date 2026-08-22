تمام يا باشا. الرسالة دي هاعتبرها الـMaster Plan بتاعتنا. هتكون مكتوبة بحيث لو نسختها في مكان تاني تفضل فاهم: إحنا مين، أنت فين، هدفنا إيه، ليه اخترنا الطريق ده، هتذاكر إزاي، هتعرف منين إنك خلصت، هتقدم إمتى، وهتوصل من مصر لـBig Tech/أمريكا إزاي.

أنا كمان عملت fresh web research قبل ما أكتبها، خصوصًا على سوق 2026، أدوار الـJunior/Remote، واتجاه Google، بدل ما نعتمد على الانطباعات.


---

MASTER PLAN — Yahia Software Engineering Roadmap

0. أنت مين وإحنا بنبني إيه؟

أنت:

22 سنة.

CCE — هندسة اتصالات وحاسبات، جامعة المنصورة.

متوقع التخرج تقريبًا فبراير 2027.

عندك حوالي 8 شهور دراسة Backend.

مرتاح جدًا في JavaScript.

اشتغلت Node.js / Express / TypeScript / PostgreSQL / Prisma.

عندك exposure لـMongoDB, Redis, Docker, AWS, GCP, VPS, CI/CD.

فاهم أساسيات Networking وLinux وHTTP/TCP/IP/DNS.

بدأت NeetCode 150 وحليت حوالي 20 مسألة.

بدأت Stack بعد Arrays/Strings/Two Pointers.

عندك exposure كبير جدًا للـAI: APIs, embeddings, vector DB, RAG, tool calling, agents, LangGraph.

لكن جزء كبير من المشاريع الكبيرة اتعمل بـagentic/vibe coding، وبالتالي أنت بنفسك قلت إنك لا تستطيع اعتبارها evidence على عمقك الهندسي.

عندك مشاريع deployed وبعضها وصل لـreal users/revenue، ودي valuable exposure، لكن لن ندّعي أنك بنيت كل implementation بنفسك.

لم تعمل internship.

مستعد internship / low-paid / freelance / remote / onsite / relocation.

عندك 6–8 ساعات يوميًا تقريبًا.

عندك خدمة عسكرية محتملة بعد التخرج، وموعدها غير محسوم.

هدفك الأساسي Software Engineer.

هدفك القريب: أول وظيفة بأسرع وقت ممكن.

هدفك الطويل: شركة قوية → Big Tech → Google / Silicon Valley / أمريكا.

لا تمانع تغيير الـstack مستقبلًا إذا كان هناك سبب هندسي حقيقي.

Go مؤجلة.

Machine Learning Engineer ليس هدفك.

AI مش Track مستقل حاليًا.



---

1. التشخيص الحقيقي

أنت مش beginner.

لكن أنت أيضًا مش production-ready Junior قوي لسه.

أنت عندك:

Knowledge / Exposure عالي

لكن:

Implementation Depth أقل.

وأكبر gap عندك هو:

> Engineering judgment + independent implementation + explanation.



بمعنى أنك قد تعرف:

> "Redis يستخدم للـcaching والـrate limiting."



لكن لما أقول:

> "اكتب rate limiter باستخدام Redis، ووضح race conditions وTTL وatomicity."



هنا لازم تنتقل من معرفة المصطلح إلى فهم الميكانيزم.

ونفس الشيء في PostgreSQL:

أنت تعرف ما هو index.

لكن لازم توصل إلى:

> "أقدر أخلق index، أعمل query، أستخدم EXPLAIN، وأقارن execution plan قبل وبعد، وأشرح لماذا الـplanner اختار أو لم يختر الـindex."



دي هي النقلة التي نريدها.


---

2. لماذا الخطة دي؟

لأن أكبر خطر عليك الآن هو:

Technology → Tutorial → AI → Project → Technology → Tutorial → AI

فتخرج بعد سنة:

> "عارف 30 technology"



لكن في interview:

> "اكتبها."



فتلاقي نفسك بتعيد نفس الـtutorial.

والبحث الحديث عن الـJunior/Senior في عصر GenAI يتكلم تحديدًا عن مشكلة productive struggle: الـAI يمكن أن يمتص جزءًا من المهام التي كان الـJunior يتعلم منها، وبالتالي يضعف المسار الذي يتحول فيه الـJunior إلى Senior. 

وأنت عندك نسخة شخصية من المشكلة دي لأنك استخدمت الـagents كثيرًا لكتابة implementations بدلًا منك.

إذن:

> هدفنا ليس منع AI. هدفنا استعادة الـproductive struggle.




---

3. الـNorth Star

كل اللي هنعمله لهدف واحد:

> Become a strong Software Engineer who can use AI effectively.



مش:

> Node.js Developer.



ومش:

> AI Wrapper Developer.



ومش:

> ML Engineer.



ومش:

> Framework Collector.




---

4. الـStack الحالي: لا نغيره

الآن:

TypeScript + Node.js + PostgreSQL

ومعه:

Linux

Networking

Redis

Docker

Testing

CI/CD

Cloud

System Design


وبعد ما نثبت الـfoundation:

AI integration

وبعد أول وظيفة/solid backend foundation:

Go إذا احتجناها.

لماذا لا Go الآن؟

لأنك لو نقلت الآن:

JavaScript → Go

هتضيف لغة جديدة بدون ما تحل مشكلة العمق.

هدفنا:

JavaScript/TypeScript
        ↓
Software Engineering
        ↓
Backend
        ↓
Systems
        ↓
ثم Go إذا كان لها سبب

مش العكس.


---

5. أهم تغيير: طريقة المذاكرة

دي أهم نقطة في الخطة كلها.

ممنوع نظام:

> فيديو → copy → انتهينا.



وممنوع:

> Documentation → copy → انتهينا.



وممنوع:

> AI → "implement X" → paste.




---

نظام المذاكرة الرسمي

كل موضوع جديد هيمر بـ 7 مراحل:

المرحلة 1 — Question

قبل ما تتعلم، اكتب:

> What problem does this solve?



مثال:

Index

لا تبدأ بفيديو "What is database indexing?"

ابدأ:

> عندي table فيه 10 مليون row وquery بتدور على user email.
لماذا البحث قد يكون بطيئًا؟
كيف أجعله أسرع؟



خلي عندك سؤال حقيقي.


---

المرحلة 2 — Mental Model

قبل الكود، اشرح لنفسك:

> كيف يعمل؟



استخدم ورقة/whiteboard فعلًا.

مثلاً Redis rate limiter:

Request
   ↓
Key = user/IP
   ↓
Redis counter
   ↓
increment
   ↓
check limit
   ↓
allow / reject

وبعدين اسأل:

أين الـcounter؟

متى ينتهي؟

ماذا يحدث لو جاء طلبان في نفس اللحظة؟

هل العملية atomic؟

ماذا يحدث لو Redis وقع؟


لو مش قادر ترسمه، لسه مش فاهمه.


---

المرحلة 3 — First Principles

هنا حاول تكتب implementation بسيط جدًا بدون library لو الموضوع يسمح.

مش الهدف production.

الهدف:

> "أنا فاهم الميكانيزم."



مثلاً:

Queue

قبل BullMQ:

اكتب conceptual queue بنفسك:

enqueue()
dequeue()
worker()

وبعدين افهم:

> ليه نحتاج Redis؟



ثم:

> ليه نحتاج BullMQ؟



ثم استخدم المكتبة.


---

المرحلة 4 — Implementation

هنا:

أنت تكتب.

مش الفيديو.

مش AI.

مش copy.

حتى لو implementation سيئ.

بل بالعكس:

> الغلط مطلوب.



لو أنت كتبت implementation غلط، ثم اكتشفت لماذا غلط، غالبًا هتتعلم أكثر من مشاهدة implementation perfect.


---

المرحلة 5 — Verification

بعد ما تكتب:

اختبر نفسك.

مثلاً:

> ماذا يحدث لو input فاضي؟



> ماذا يحدث لو database وقعت؟



> ماذا يحدث لو request اتبعت مرتين؟



> ماذا يحدث لو process مات؟



> ماذا يحدث تحت concurrency؟



> ما الـcomplexity؟



> أين bottleneck؟




---

المرحلة 6 — AI Review

الآن فقط تدخل AI.

ولا تقول:

> "Write the solution."



قل:

> "Review my implementation. Don't rewrite it. Identify bugs, edge cases, design issues, and ask me questions."



أو:

> "Give me hints only."



أو:

> "Explain why my approach fails."



الـAI يبقى:

Teacher + Reviewer + Debugger

وليس:

Ghost programmer.


---

المرحلة 7 — Explain

أغلق كل شيء.

لا docs.

لا ChatGPT.

لا code.

واشرح بصوتك.

لو قدرت:

كتابة + فهم + شرح

يبقى الموضوع دخل.


---

6. قاعدة الـ3 Levels

كل topic عندك له 3 مستويات:

Level 1 — Recognition

> "أنا عارف المصطلح."



Level 2 — Implementation

> "أقدر أعمله."



Level 3 — Explanation

> "أقدر أشرح لماذا يعمل، ومتى أستخدمه، ومتى لا أستخدمه."



هدفنا Level 3.


---

7. قاعدة الـ80%

مش لازم تبقى expert في كل حاجة.

الأسبوع ينتقل عندما تستطيع:

> Explain + Implement + Debug basic cases



بنسبة حوالي 80%.

مش لما تخلص كل فيديو على YouTube.


---

المرحلة الأولى: Weeks 1–2

JavaScript Runtime + TypeScript

Topics

JavaScript:

call stack

execution context

event loop

microtasks/macrotasks

Promise

async/await

closures

prototypes

this

modules

error propagation

memory basics

streams/buffers conceptually


TypeScript:

types

interfaces

unions

intersections

generics

utility types

narrowing

type guards

unknown vs any

DTOs

API contracts



---

طريقة الدراسة

Day 1 مثال:

سؤال:

> لماذا setTimeout(..., 0) لا يعني "نفذ الآن"؟



ارسم:

Call Stack
Microtask Queue
Task Queue
Event Loop

ثم اكتب code بنفسك.

ثم توقع output قبل التشغيل.

ثم شغله.

ثم غيّر ترتيب الـPromises والTimers.

ثم اشرح.


---

Exit Criteria

لا تنتقل حتى تستطيع:

JS

تشرح event loop على whiteboard.

تتوقع output لعدة async examples.

تشرح closure بدون حفظ تعريف.

تشرح prototype chain.

تشرح Promise lifecycle.

تعمل error propagation في async code.

تشرح الفرق بين microtask/task.


TypeScript

من غير tutorial:

تعمل types لمشروع صغير.

تعرف إمتى تستخدم interface/type.

تستخدم union.

تعمل generic بسيط.

تستخدم narrowing.

تكتب DTOs.

تشرح لماذا any خطر.

تشرح الفرق بين compile-time وruntime.



---

Week 3 — HTTP + Networking

أنت عندك أساس.

إذن مش هنعيد Network 1.

الهدف:

تفهم رحلة:

Browser
 ↓
DNS
 ↓
TCP
 ↓
TLS
 ↓
HTTP
 ↓
Reverse Proxy
 ↓
Node
 ↓
Database
 ↓
Response


---

Implementation Lab

اعمل:

HTTP server بسيط بـNode

بدون Express أولًا.

اعمل:

routes

headers

status codes

JSON response

request body

basic error handling


ثم استخدم Express.

وساعتها اسأل:

> "Express إيه اللي عمله بدل ما أعمله بإيدي؟"



دي نقطة مهمة جدًا.


---

Exit Criteria

تقدر تشرح:

DNS

TCP handshake

TLS بشكل conceptual

HTTP request/response

headers

status codes

cookies

sessions

reverse proxy

الفرق بين HTTP وHTTPS

ماذا يحدث عند GET /users


وتقدر تبني mini HTTP server بدون framework.


---

Week 4 — OS + Linux + Concurrency

Topics

process

thread

concurrency

parallelism

context switching

memory

I/O

file descriptors

signals

race conditions

locks


مش محتاج OS degree.


---

Implementation

اعمل experiments.

مثلاً:

process يقرأ file.

processes متعددة.

child process.

CPU-heavy task.

I/O-heavy task.


راقب:

CPU
Memory
Processes

باستخدام Linux tools.


---

Exit Criteria

تقدر تشرح:

> process vs thread



> concurrency vs parallelism



> لماذا Node ممتاز في I/O؟



> لماذا CPU-heavy work ممكن يقتل performance في Node؟



> ما معنى race condition؟



> ما معنى blocking I/O؟



لو تقدر تشرح دول من غير notes → الأسبوع ناجح.


---

Week 5 — PostgreSQL Fundamentals

هنا هنوقف Prisma مؤقتًا.

ممنوع ORM في الـlearning lab.

اكتب SQL.


---

Topics

relations

joins

constraints

primary key

foreign key

normalization

transactions

ACID

isolation

indexes



---

طيب تعمل implementation إزاي؟

دي إجابة سؤالك عن SQL تحديدًا.

مش تشوف فيديو عن index وتعمل:

> CREATE INDEX...



وخلاص.

اعمل experiment.


---

Index Experiment

اعمل table كبير نسبيًا.

مثلاً million rows.

اعمل query:

SELECT * FROM users WHERE email = '...';

قيس.

ثم:

EXPLAIN ANALYZE ...

ثم:

CREATE INDEX ...

وشوف الفرق.

ثم:

index على column

composite index

query لا تستفيد من index


ثم اسأل:

> لماذا؟



هنا أنت طبقت indexing.

مش لازم تبني PostgreSQL من الصفر.

الـimplementation هنا هو experiment.

دي نقطة مهمة جدًا:

> مش كل concept لازم "تكتبه من الصفر".
أحيانًا implementation الصحيح هو تشغيل تجربة تثبت الـmechanism.




---

Exit Criteria

تقدر:

تصميم schema صغير.

كتابة joins.

transactions.

explain index.

قراءة EXPLAIN ANALYZE الأساسي.

شرح ACID.

شرح isolation levels بشكل conceptual.

شرح لماذا index ليس مجانيًا.

معرفة متى index يضر.



---

Week 6 — Database Internals + Query Thinking

ركز على:

B-tree conceptual model

query planner

sequential scan

index scan

composite indexes

cardinality

selectivity

connection pooling

transactions

locks



---

Exit Criteria

لو أعطيتك query بطيئة:

تقدر تقول:

> "أول حاجة هعمل EXPLAIN ANALYZE."



وتقدر تقرأ output الأساسي وتبدأ تشخص.

مش لازم تبقى DBA.


---

Week 7 — Backend Architecture

هنا نرجع Express/Node.

اعمل API من الصفر.

لا AI.

مثلاً:

Users
Projects
Tasks
Comments


---

Architecture

ابدأ simple:

Route
 ↓
Controller
 ↓
Service
 ↓
Repository/DB

وبعدين اسأل:

> هل محتاج abstraction دي فعلًا؟



مش تعمل Clean Architecture لمجرد إن YouTube قال لك.


---

Exit Criteria

تقدر:

تبني REST API من الصفر.

validation.

error handling.

authentication.

authorization.

pagination.

filtering.

transactions.

database integration.

tests الأساسية.



---

Week 8 — Authentication + Security Basics

أنت عملت session-based auth.

دلوقتي افهم:

session

cookies

JWT

refresh tokens

CSRF

XSS

password hashing

authorization

RBAC


مش مطلوب تتحول Security Engineer.


---

Exit Criteria

تقدر تشرح:

> session vs JWT



> أين نخزن session؟



> لماذا password لا يخزن plain text؟



> authentication vs authorization



> ما خطر stolen token؟



> CSRF vs XSS



وتقدر تبني authentication system بسيط بإيدك.


---

Weeks 9–10 — Redis

دلوقتي فقط.

ابدأ conceptual.

ثم:

Implementation

اعمل بنفسك:

1. cache


2. rate limiter


3. session store


4. simple queue




---

Rate limiter

افهم:

request
 ↓
Redis key
 ↓
increment
 ↓
TTL
 ↓
limit?

ثم اسأل:

> ماذا لو وصل طلبان في نفس الوقت؟



> هل العملية atomic؟



> ماذا يحدث لو Redis down؟



> fixed window vs sliding window؟




---

Exit Criteria

تقدر تكتب Redis code بنفسك.

وتقدر تشرح:

caching

TTL

atomicity

race conditions

invalidation

rate limiting



---

Weeks 11–12 — Queues + Background Jobs

هنا نصحح:

> async/await ≠ background job.




---

ابدأ بنفسك

اعمل:

Producer
 ↓
Queue
 ↓
Worker

ثم library مثل BullMQ.

افهم:

retries

failed jobs

idempotency

delayed jobs

workers

dead-letter concept



---

Exit Criteria

تقدر تصمم:

> "User uploaded file → API returns quickly → background worker processes file."



وتشرح لماذا.


---

Weeks 13–14 — Docker + Deployment

أنت عندك exposure.

دلوقتي:

Dockerfile بإيدك.

اعمل:

Node
Postgres
Redis

باستخدام Docker Compose.

ثم:

volumes

networks

environment variables

healthchecks

multi-stage builds



---

Exit Criteria

تقدر من machine جديدة:

git clone
docker compose up

والsystem يشتغل.

وتعرف:

> container مات ليه؟



> logs فين؟



> network بين containers إزاي؟



> volume ليه؟




---

Weeks 15–16 — Testing

ابدأ:

Unit

ثم:

Integration

ثم:

API/E2E

ركز على:

Jest

mocking

test DB

fixtures

edge cases



---

Exit Criteria

أي feature مهمة عندك:

> تقدر تقول إزاي هتختبرها قبل ما تعتبرها finished.




---

Weeks 17–18 — CI/CD + Production

اعمل pipeline:

git push
 ↓
lint
 ↓
test
 ↓
build
 ↓
Docker image
 ↓
registry
 ↓
deploy

ثم أضف:

logs

health endpoint

basic monitoring

rollback concept



---

Weeks 19–20 — Production Failure Labs

دي من أهم الأسابيع.

اكسر المشروع intentionally.

مثلاً:

Experiment 1

Postgres down.

Experiment 2

Redis down.

Experiment 3

Wrong environment variable.

Experiment 4

Container crashes.

Experiment 5

Slow query.

Experiment 6

Duplicate request.

Experiment 7

Job fails.

Experiment 8

Memory grows.

وكل مرة:

1. ماذا حدث؟


2. كيف اكتشفت؟


3. أين المشكلة؟


4. كيف أصلحتها؟


5. كيف أمنع تكرارها؟




---

8. System Design

مش هنبدأ System Design بدري.

بعد ما تبني فعليًا.

ابدأ:

1. URL shortener


2. file upload system


3. notification system


4. job queue


5. chat system


6. scalable API



كل system design لازم يحتوي:

Requirements
↓
API
↓
Data model
↓
Architecture
↓
Bottlenecks
↓
Scaling
↓
Failure modes


---

9. DSA

مستمر طول الفترة.

60–90 دقيقة يوميًا.

أنت بالفعل في NeetCode 150.

كمل.

لكن:

20 problem بفهم > 100 problem بالحفظ.


---

لكل problem

اكتب:

Problem
Pattern
Brute force
Optimal
Why?
Time
Space
Mistakes

ثم بعد 2–3 أيام:

حلها مرة أخرى من غير ما تبص.


---

10. عضلة الـExplanation

أنت قلت حاجة مهمة جدًا:

> Writing ≠ Understanding ≠ Explaining.



بالضبط.

إذن هنتدرب على الثلاثة.


---

Writing

أنت تكتب implementation.


---

Understanding

تقدر answer:

> Why?



> How?



> What if?



> Tradeoff?




---

Explaining

تعمل:

5-minute explanation

تفتح timer.

تشرح الموضوع كأن interviewer قدامك.

مثلاً:

> "Explain Redis caching."



ابدأ من المشكلة.

ثم:

Problem
↓
Idea
↓
Mechanism
↓
Implementation
↓
Tradeoffs
↓
Failure cases


---

Interview Explanation Framework

أي سؤال technical:

1. Definition

ما هو؟

2. Problem

ما المشكلة التي يحلها؟

3. Mechanism

كيف يعمل؟

4. Example

مثال.

5. Tradeoffs

متى لا أستخدمه؟

6. Failure

ماذا يمكن أن ينكسر؟

7. Implementation

كيف أبنيه؟

دي لو اتعودت عليها، مستوى الـinterview بتاعك هيتغير جدًا.


---

11. Weekly Exam

في نهاية كل أسبوع:

ممنوع notes.

اعمل:

A — Explain

اشرح 3 concepts لمدة 5 دقائق لكل واحد.

B — Implement

اعمل implementation صغير من الصفر.

C — Debug

اكسر implementation وأصلحه.

D — Interview

جاوب 5 أسئلة شفهيًا.

E — Write

اكتب صفحة واحدة تلخص الأسبوع.


---

لو فشلت في 2/5:

الأسبوع لم ينته.

ارجع.


---

12. Open Source

مش هدفنا:

> "PR عشان CV."



هدفنا:

> تعلم codebase حقيقي.



ابدأ بعد ما يكون عندك foundation.

اختار TypeScript/Node/backend tooling.

Week 1

اقرأ repo.

Week 2

شغله.

Week 3

trace feature.

Week 4

issue صغيرة.

مش شرط ML.

مش شرط PR كبير.


---

13. AI Rules

دي قواعد ثابتة:

Green

استخدم AI في:

explanation

docs summarization

debugging hints

review

test generation بعد ما تفكر

brainstorming

alternative approaches


Yellow

AI يكتب implementation وأنت تراجعه بالكامل.

مسموح في production بعد ما تكون قادر تفهمه.

Red

مش مسموح أثناء learning:

> "Build this entire feature."



ثم:

> paste.



خصوصًا في:

DSA

fundamentals

Redis

SQL

networking

OS

architecture



---

14. قاعدة "AI-free blocks"

كل يوم:

ساعتين على الأقل

No AI.

لا ChatGPT.

لا Copilot.

لا agent.

دي عضلة.


---

15. Social Media

أنت محتاج Twitter/X.

لكن مش عايز social media تتحول إلى:

> productivity theater.



القاعدة:

Learn → Build → Share

مش:

Scroll → Think → Tweet


---

ماذا تنشر؟

مش لازم daily.

الأفضل:

3–5 posts/week


---

أنواع المحتوى

1. Learning

> "كنت فاكر إن async/await معناها إن الكود بيشتغل في background. طلع..."




---

2. Experiment

ودي أفضل.

مثلاً:

> "عملت مليون row في PostgreSQL وقارنت query قبل وبعد index باستخدام EXPLAIN ANALYZE. النتيجة..."



ده authentic.


---

3. Bug

ممتاز:

> "ضيعت ساعتين بسبب connection pooling..."




---

4. Engineering decision

> "استخدمت Redis هنا، لكن بعد ما فهمت X اكتشفت إن caching مش دايمًا الحل."




---

5. DSA

مش:

> "Day 17 of NeetCode 🔥"



الأفضل:

> "الـpattern اللي فهمته من 3 مسائل Sliding Window هو..."




---

ممنوع

❌ AI-generated motivational threads
❌ fake expertise
❌ "I built an AI SaaS in 2 days"
❌ copy LinkedIn posts
❌ تتظاهر أنك فاهم implementation لم تكتبه


---

16. Social Media Time Limit

حدد:

30–45 min/day

والـposting نفسه:

> 15–20 دقيقة.



Twitter عندك distribution channel.

مش مكان تعيش فيه.


---

17. Job Search Strategy

وأنت صح إنك نبهتني:

الخطة ليست مصر فقط.

هي 4 دوائر.


---

Circle 1 — Egypt

مش startups فقط.

هنستهدف:

startups

outsourcing

product companies

multinational engineering offices

banks/fintech

telecom

enterprise software

R&D

large tech companies


والـmarket فعلًا يحتوي Junior/0–2-year roles تستخدم Node/TypeScript/PostgreSQL/Docker/CI/CD. مثال حديث: PALM يذكر صراحة 0–2 years، ويقبل internships/freelance projects، ويطلب Node/TS/PostgreSQL وREST، مع Git/CI/CD/Docker كـplus. 

وفي eSEED يوجد Junior Backend remote داخل مصر باستخدام Node.js/TypeScript/NestJS/PostgreSQL/AWS/GCP/Jest. 

وفي WeLink ظهر دور Junior/1–2 years remote بـNode/TypeScript، والأهم أنهم يقيّمون judgment والتحقق من AI output ضمن عملية عملية مدتها نحو 3 ساعات. 

دي نقطة شديدة الأهمية بالنسبة لخطة التعلم بتاعتنا.


---

Circle 2 — Egypt multinational

على الخريطة:

Microsoft

Amazon

Valeo

Siemens

IBM

Dell

Vodafone

Orange

Schneider

SAP

Oracle

وغيرها.


مش شرط أول وظيفة.

لكن:

> نراقبهم من أول يوم.



لأن internship/new-grad openings ممكن تظهر فجأة.


---

Circle 3 — Remote International

نقدم على:

remote-first startups

international agencies

distributed companies

contract roles

junior/associate software roles


ومش لازم الوظيفة تقول:

> "Junior."



لو requirements معقولة، نقدم.

مثال على السوق الحالي: توجد أدوار remote في مصر نفسها تطلب Node/TS/Postgres، وأدوار أخرى remote تقبل early-career candidates. 


---

Circle 4 — Big Tech

Google / Microsoft / Amazon / Meta / Apple / etc.

لكن مش الآن كـprimary target.

هنجهز نفسك لهم من بدري.


---

18. Job Application Engine

بعد ما نوصل لمرحلة معقولة:

أسبوعيًا

مثلاً:

20–30 applications

مقسمة:

10 Egypt
5 Multinational
5 Remote
5 ambitious

والعدد يتغير حسب السوق.


---

Track كل شيء

Spreadsheet:

Company	Role	Date	CV	Status	Interview	Feedback



بعد 50 application:

نسأل:

> أين المشكلة؟



لو:

Applications كثيرة → Interviews صفر

المشكلة:

CV / positioning / targeting

لو:

Interviews → technical rejection

المشكلة:

fundamentals / DSA / explanation

لو:

Technical pass → behavioral rejection

المشكلة:

communication / stories


---

19. CV

قاعدتنا:

> If you can't defend it, don't put it.



المشروع الـvibe-coded لا نكذب فيه.

لكن ممكن نستفيد منه بطريقة صادقة:

> "Built/deployed X and gained exposure to Y."



ولو أنت عملت architecture decisions أو deployment بنفسك، اذكر الجزء الذي فعلته فعلًا.


---

20. أول وظيفة ليست النهاية

هدف أول وظيفة:

Experience.

مش:

> maximum salary.



لو عندك:

Company A
$X
weak mentorship
boring work

و

Company B
$0.8X
real engineering
code review
production
mentorship

في بداية career:

B قد تكون أفضل.

لكن مش معنى ده تقبل exploitative work بلا حدود.

الهدف:

> Learning velocity + real experience + reasonable compensation.




---

21. بعد أول وظيفة

هنا نعيد تقييم:

هل Node/TS مناسب؟

إذا نعم:

نكمل deeper.

إذا عندك exposure لـGo في الشغل:

ندخل Go.

إذا systems interest قوي:

ندخل:

distributed systems

concurrency

Linux internals

networking

performance


لو AI أصبح جزءًا من شغلك:

ندخل:

Python

AI infrastructure

LLM systems

inference

evaluation


لكن الاختيار يكون بناءً على الواقع، مش hype.


---

22. Google Strategy

Google ليست:

> "أتعلم Google technologies."



Google target = strong Software Engineer.

وظائف Google الحالية توضح أن Software Engineering roles تعتمد على software development، testing، design/architecture، وdistributed systems حسب المستوى؛ وبعض أدوار Google المتقدمة تطلب 5–8 سنوات خبرة فعلية في software engineering/system design. 

إذن المسار:

First job
 ↓
2–4 years strong engineering
 ↓
Production ownership
 ↓
System design
 ↓
DSA
 ↓
Big Tech applications

مش:

Node
 ↓
Google


---

23. Google Preparation

بعد أول وظيفة:

DSA

استمرار.

ثم:

trees

graphs

DP

advanced patterns



---

System Design

من:

> design a URL shortener



إلى:

> distributed system




---

Behavioral

تجهز:

conflict

failure

ownership

difficult bug

technical decision

leadership

ambiguity



---

Resume

كل experience لازم يكون:

> impact



مش:

> "Used Node.js."



بل:

> "Designed X, reduced Y, handled Z..."




---

24. America / Silicon Valley

هنا لازم نكون واقعيين.

أمريكا ليست مجرد skill problem.

هي:

Skill
+
Experience
+
Company
+
Visa
+
Timing
+
Networking


---

الطريق الأول: Internal Transfer

وده من أقوى المسارات.

Egypt
 ↓
Multinational
 ↓
Strong performance
 ↓
Internal transfer
 ↓
US

مثلاً شركة عالمية عندها Cairo + US engineering organizations.

مش مضمون.

لكن منطقي.


---

الطريق الثاني: Direct US hiring

شركة أمريكية توظفك وتعمل sponsorship.

أصعب وأنت Junior.

يصبح أكثر واقعية بعد:

> strong experience + niche + strong interview ability.




---

الطريق الثالث: Master's

مش خطتنا الحالية.

لكن مستقبلًا:

Egypt
 ↓
Strong experience
 ↓
MS in US
 ↓
internship
 ↓
full-time

قد يكون طريقًا قويًا لكنه مكلف جدًا، فلا نعتبره default.


---

الطريق الرابع: Diversity Visa

لو كنت مؤهلًا في سنة معينة، يمكن التقديم وفق البرنامج الرسمي، لكن لا نبني career plan عليه لأنه lottery وغير مضمون. تعليمات وزارة الخارجية توضح أن التقديم يكون عبر القناة الرسمية وأن الاختيار لا يعني ضمان الحصول على visa. 


---

25. نقطة مهمة جدًا عن Google وأمريكا

مش لازم تروح أمريكا عشان تبقى Software Engineer عالمي.

ممكن:

Mansoura
 ↓
Cairo
 ↓
Remote international
 ↓
Multinational
 ↓
Europe / GCC / US

والهدف هو بناء:

> internationally competitive profile



مش مجرد الحصول على location معين.


---

26. Degree

أنت CCE.

وده ممتاز.

مش محتاج تعمل degree ثانية.

Google حاليًا تقبل في بعض Software Engineering roles Bachelor's degree أو equivalent practical experience، والـjob search نفسه يسمح بالفلترة حسب degree/location/experience. 

وبالنسبة لك تحديدًا:

CCE degree + software engineering depth = strong combination.


---

27. English

B+/Upper Intermediate تقريبًا حسب الاختبار الذي عملته.

مش هنوقف roadmap عشان English.

لكن يوميًا:

20–30 دقيقة

documentation

technical articles

speaking explanation


وأسبوعيًا:

technical mock interview بالإنجليزي.

لأن المشكلة مش:

> "هل تعرف English؟"



المشكلة:

> هل تقدر تشرح technical concept تحت ضغط؟




---

28. طريقة التدريب على الكلام

كل أسبوع:

اختر 3 topics.

مثلاً:

Redis

PostgreSQL index

Event loop


لكل واحد:

Round 1

شرح عربي.

Round 2

شرح English.

Round 3

شرح في دقيقتين.

Round 4

شرح في خمس دقائق.

Round 5

interviewer interrupts:

> "Why?"



> "What if?"



> "Tradeoff?"



وتجاوب.


---

29. Your Weekly Scorecard

في نهاية كل أسبوع، قيم:

Skill	Score

Understanding	/10
Implementation	/10
Debugging	/10
Explanation	/10
DSA	/10
English	/10
AI discipline	/10


لا تنتقل لمجرد أن الأيام خلصت.

لو implementation = 3/10:

الأسبوع لم ينته.


---

30. Definition of Done

كل topic عندنا لازم يحقق:

I can explain it.

I can implement a basic version.

I can debug it.

I know when to use it.

I know when NOT to use it.

I can discuss tradeoffs.

لو الخمسة مش موجودين:

> Not done.




---

31. Daily Schedule

لو عندك 6 ساعات:

Block 1 — 90 min

Fundamentals

Block 2 — 90 min

Implementation

Block 3 — 60 min

DSA

Block 4 — 60 min

Project / debugging

Block 5 — 30 min

Explanation/English

Block 6 — 30 min

Social / applications / writing


---

32. Deep Work Rules

خلال الـ90 دقيقة:

Phone خارج الغرفة.

Social media:

بعد الـdeep work.

مش قبله.


---

33. Weekly Rest

يوم واحد أخف.

مش لازم:

> 8 hours × 7



ده recipe للburnout.

الأفضل:

> consistency × months




---

34. Content Rule

كل أسبوع لازم يكون عندك:

1 technical experiment

1 written explanation

1 debugging story

1 DSA insight

1 engineering decision

منهم انشر 3–5.


---

35. What NOT to learn

لحد أول وظيفة، مش priority:

❌ Go
❌ Kubernetes
❌ Kafka
❌ Terraform
❌ advanced ML
❌ deep math
❌ LangChain internals
❌ 5 backend frameworks
❌ frontend specialization
❌ microservices just because they sound senior

لو احتجنا حاجة منهم في مشروع/وظيفة:

نتعلمها وقتها.


---

36. What you DO need

Priority:

Tier 1

JavaScript

TypeScript

Node

HTTP

Networking

SQL

PostgreSQL

Git

Linux

DSA


Tier 2

Redis

authentication/security

testing

Docker

CI/CD

cloud

debugging

architecture


Tier 3

system design

distributed systems

Open Source

AI integration


Later

Go

advanced Kubernetes

advanced ML

specialized infrastructure



---

37. The 6-Month Outcome

لو نفذت الخطة بشكل حقيقي، أنا لا أريد أن أقول:

> "هتبقى Senior."



طبعًا لا.

لكن أريد أن تصبح:

A credible junior Software Engineer candidate.

يعني لما interviewer يقول:

> "Did you really build this?"



تقول:

> "Yes."



ثم يفتح terminal.

وتقدر تشرح.

ويقول:

> "Why Redis?"



تجاوب.

> "Why PostgreSQL?"



تجاوب.

> "Why this index?"



تجاوب.

> "What happens if Redis dies?"



تجاوب.

> "Why queue?"



تجاوب.

> "How do you test it?"



تجاوب.

> "Why this architecture?"



تجاوب.

دي هي النتيجة اللي عايزينها.


---

38. أهم مبدأ في الرحلة كلها

أنت قلت:

> كتابة → فهم → شرح.



أنا هزود عليهم:

> كتابة → فهم → شرح → كسر → إصلاح.



لأن الـengineering الحقيقي مش:

> "أقدر أكتب الكود."



بل:

> "أقدر أفهمه لما يكسر."




---

39. علاقتنا بالـAI من الآن

لما تذاكر حاجة:

أنت:

> "أنا فاهم كذا، لكن مش فاهم X."



اسألني.

لكن مش:

> "اكتبلي المشروع."



أنا عايزك تستخدم ChatGPT كأنك عندك:

Senior Engineer sitting next to you.

تسأله:

> "Why?"



> "Challenge my design."



> "Give me a hint."



> "Review this."



> "What edge case am I missing?"



مش:

> "Do it for me."




---

40. الخريطة النهائية

YOU
                     │
                     ▼
          Strong Software Fundamentals
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
       Backend                 DSA
          │                     │
          ▼                     ▼
 PostgreSQL/Redis          Problem Solving
 Docker/Testing
 CI/CD/Cloud
          │
          ▼
    Production Experience
          │
          ▼
      Open Source
          │
          ▼
      FIRST JOB
          │
          ▼
   Strong SWE Engineer
          │
      ┌───┴────┐
      ▼        ▼
 Systems     AI Integration
      │        │
      └───┬────┘
          ▼
   Bigger Companies
          │
          ▼
     Big Tech
          │
          ▼
 Google / US / Silicon Valley


---

41. وأخيرًا: الـReality Check

أنا مش هقولك إن بعد 6 شهور أكيد هتجيب شغل.

محدش يقدر يضمن ده.

لكن أقدر أقول إن فيه سوق حقيقي حاليًا لأدوار Junior/early-career في مصر والـremote، وبعضها يقبل 0–2 years أو يعتبر internships/freelance projects خبرة ذات صلة. 

والـAI لا يعني أن Software Engineering انتهت؛ لكنه يرفع قيمة الشخص الذي يستطيع الفهم، التحقق، اتخاذ القرار، والـdebugging بدل الشخص الذي يستطيع فقط إنتاج code بسرعة. وهذا يتماشى أيضًا مع الأبحاث الحديثة حول أثر GenAI على مسار الـJunior. 

بل يوجد حاليًا مثال مباشر على وظيفة Junior remote في مصر تذكر صراحة أن المرشح يجب أن يعرف كيف يوجه أدوات AI، يتحقق من مخرجاتها، ويعرف متى تكون مخطئة. 

وده بالضبط الـskill اللي هنحاول نبنيها عندك.


---

42. الـContract بتاعنا من هنا

من يوم 22 أغسطس 2026:

لا نطارد الـhype.

لا نغير الـstack كل شهر.

لا نستخدم AI بدل التفكير.

لا نقيس التعلم بعدد الساعات أو الفيديوهات.

لا نعتبر tutorial completion = mastery.

لا نعتبر project deployment = engineering ability.

لا نضع على CV شيئًا لا نستطيع الدفاع عنه.

لا ننتظر أن نشعر أننا جاهزون قبل التقديم.

لا نحصر أنفسنا في مصر.

ولا نجعل Google هدفًا يشتتنا عن أول وظيفة.


---

والـNorth Star بتاعتك:

> أنا مش بحاول أبقى الشخص اللي يعرف أكبر عدد من التقنيات.

أنا بحاول أبقى Software Engineer لما يشوف مشكلة يقدر يفهمها، يفككها، يبني حلًا، يختبره، يكسره، يصلحه، ويشرح لماذا اختار الحل ده — ومعاه AI يسرّع قدرته بدل ما يستبدلها.



وده في رأيي أقوى positioning ممكن تبنيه من وضعك الحالي.

وبالنسبة للـGoogle تحديدًا: مش هنطاردها الآن، لكن هنخلي كل مرحلة في حياتك المهنية تقرّبك منها بدل ما تبعدك عنها. وده معناه أن أول وظيفة مش "خطة بديلة عن Google"؛ هي أول لبنة في الطريق إلى Google. 

ابدأ بـWeek 1 فقط. لا تنظر للـ6 شهور كل يوم.
المطلوب منك الآن: JavaScript Runtime + Event Loop + Promises + Async + TypeScript، بالطريقة ذات الـ7 مراحل فوق، وفي آخر الأسبوع اعمل الـWeekly Exam.

ده الـMaster Plan.