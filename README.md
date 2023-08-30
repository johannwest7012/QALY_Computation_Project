Johann West

**Quality Adjusted-Life Years Computation Framework and Software Application Undergraduate Computer Science Research Proposal**

CS 3860

Johann West

Dr. Vikash Singh

# Utilized Vocabulary

- **QALYs** - Quality Adjusted Life Years. QALYs are a metric used to provide measurement of the quality of an individual(s) years of life when adjusted for quality of life. A QALY is an indefinite metric, meaning there is no single strict way to calculate a quantity of QALYs. There is no single defined QALY scale, or mechanism to provide input parameters to produce a QALY score for altruistic applications. This is partially what this project is looking to remedy. However it is commonly accepted that a single Quality Adjusted Life Year should be in a range of 0-1, with 1 being the highest quality life year an individual could live. If that individual lived at that same highest quality for 40 years, that would be 40 QALYs. If 10 individuals all lived for 40 years at the highest quality of life, that would be (10 \* 40 \* 1) = 400 QALYs. The core idea of how QALYs intersect with this project is if you improve someone's life for so many years, you produce QALYs.
  - Ex: We have an individual at age 40, who currently lives at 0.8 QALYs per year. If we remove something that lowers their quality of life, and increase their quality of life to 0.9 QALYs per year, and we estimate they will live till age 70, then we have produced an additional 0.1 QALY per year, for 30 years. That is an estimated (0.1 \* 30) = 3 QALYs produced by removing the factor that was lowering their quality of life.
  - QALYs are always subjective, always an estimation, always lacking to include every possible factor that could affect the score, but potentially useful for practically measuring the effect of altruism.
- **Quality of Life Reducers** - Referenced in shorthand as simply a "reducer." Quality of Life Reducers is a term I have coined to describe the factors that will be considered in this project that reduce the quantity of QALYs. For example, "Blindness" would be a Quality of Life Reducer for the years the individual suffers from the condition. An individual that is being human trafficked would be a Quality of Life Reducer for the years the individual is human trafficked. A QALY score will be determined based on the positive effect of removing these Quality of Life Reducers. This project realizes that certain Quality of Life Reducers may maintain to have a negative effect long after the Quality of Life Reducer is removed, for example an individual that suffered from human trafficking would likely suffer from PTSD and other negative effects. Unfortunately, in order to plausibly develop a usable software that is capable of comparing and measuring the effects of Quality of Life Reducers, all reducers that will be included will be limited to the years in time in which the reducer was suffered directly. A Quality of Life Reducer can be a disease, mental illness, inhibitor of lifestyle, inhibitor of a human right, or any factor that is generally assumed to reduce an individual's quality of life that also fits the criteria determined in the Quality of Life Reducer Criteria defined in point 1 of the [Prototype Solution Approach.](#_d34c00ccv2vd)
  - Few examples of Quality of Life Reducers for reference of their scope
    - Depression
    - Food Insecurity
    - Clean Water Insecurity
    - Housing Insecurity
    - Lung Cancer
    - Syphilis
    - Lack of access to primary education
    - Lack of access to secondary education
    - Lack of access to higher education
    - Blindness
    - Deafness

# Introduction

This project is inspired by the ideals of the Effective Altruism movement. Effective Altruism is a movement focused on finding the best ways to do the most good. This is elaborated on the [Effective Altruism website](https://www.effectivealtruism.org/articles/introduction-to-effective-altruism),

 "This project matters because, while many attempts to do good fail, some are enormously effective. For instance, some charities help 100 or even 1,000 times as many people as others, when given the same amount of resources.

This means that by thinking carefully about the best ways to help, we can do far more to tackle the world's biggest problems."

One mechanism used in the Effective Altruism community is the QALY.

The quality-adjusted life-year (QALY) was originally a measure of the value of health outcomes. Since health is a function of the length of life and quality of life, the QALY was developed as an attempt to combine the value of these attributes into a single index number. The QALY calculation is simple: the change in utility value induced by the treatment is multiplied by the duration of the treatment effect to provide the number of QALYs gained. A QALY measurement takes into account both mortality and morbidity when comparing two medical treatments.

While the QALY metric was initially intended to be used in medical applications, it has been since adopted to measure the impact of altruistic efforts by organizations such as Effective Altruism, with the beginning of the transition to applications in altruism commonly given to William MacAskill's book, _Doing Good Better,_ to provide a metric for measuring the improvement of an individual or a group of individuals' lives after a change has been made. It should be noted that there is disagreement within the Effective Altruism community on whether QALYs provide the best method for comparing the effect of altruistic efforts. Some argue that WALYs (Well-being Adjusted Life Years) would be better, or that QALYs should not be used at all.

For example, providing prescription glasses to an individual with bad eyesight would amount to a certain amount of QALYs based on the years they would live with glasses where they would have a higher quality of life due to the benefit of better eyesight. Alternatively, simply extending someone's life with no benefit to the quality of their life would amount to a certain amount of QALYs. Both of these have a smooth overlap with the medical application of QALYs, however other altruistic efforts, for example solving food insecurity or providing clean water to a community do not have as direct overlap with the medical applications of QALYs.

# **Ethical Problems with QALYs**

The use of QALYs in altruistic applications as well as medical applications has many critics.

In the medical field, there is the fear that QALYs may be utilized to compare the needs of patients that might require treatment that is limited in availability. However, institutions such as [ICER](https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/) assert that QALY use should be restricted to comparing the benefit to cost ratio of two possible treatments for an individual patient.

However, in altruism, where individuals suffering from [Quality of Life Reducers](#_8zhgb84pnvyx) will always outpace the funding available to support them, comparison that decides which efforts and by extension which individuals should receive altruistic aid is not only inevitable, but the goal of using QALYs in altruism.

The ethical nature of making a decision to decide who receives aid is and will likely perpetually be a polarizing debate, however I believe that utilizing a metric to compare which efforts will have the greatest impact is not only ethical, but necessary if the goal is to produce the greatest possible benefit in the world. We apply metrics, statistics, and systematic science to every aspect of life we care to succeed in, and I believe that we cannot claim to want the most positive change in the world if we do not also make the effort to apply these tools to that positive change.

However, the difficulty is the subjectivity that is tied into applying these principles to altruism. Therefore, the goal of this project is to apply efficiency and comparison only in areas where it is appropriate and systematically reviewable. That means that this project will not take into account race, religion, sexual orientation, gender, sex, nationality or any other factor that might infer one person is "more deserving," by nature of the individual, than another individual. The goal of this project is not to compare individuals, but compare the efforts that might benefit **an individual.** By **"an individual"** that means the attributes and nature of the actual individual, besides the Quality of Life Reducers in question, is not taken into consideration. This project will assume **that all human life is equal.**

# Functional Problems with QALYs

The current limitations to using QALYs in altruistic applications is that there is currently no method to efficiently and consistently generate a QALY measurement for efforts that do not stay purely within medical applications. Medical application of QALYs usually requires the administration of surveys and questionnaires to patients, and is contained in the context of comparing the benefits of two treatments for a single patient. QALY measurements have been known to be calculated for certain altruistic efforts, however it is mostly limited to comparing two or very few altruistic efforts to each other, and requires in depth and expensive analysis and academic study of all factors involved.

There are many technical and ethical problems with using QALYs as a metric; however, they provide an inexact, subjective, but potentially practical method of comparing altruistic efforts. For example, with the ability to produce QALY measurements, one could potentially compare the impact of spending $1,000,000 on HIV treatments and spending $1,000,000 on distributing HIV awareness brochures to a vulnerable region by comparing the quantity of QALYs each effort would produce.

Organizations, such as Effective Altruism, are interested in the concept of QALYs as it potentially provides a method of comparing altruistic efforts to determine efforts with the potential to benefit the most people the most.

# Project Goal

If doing the most good is truly an effort humanity should be striving for, I believe that similar principles and methodologies that allow us to maximize efficiency in areas such as industry and finance should also be applied to altruism. For this project, that means utilizing a metric, such as the QALY, to measure and compare the effectiveness of altruistic efforts.

This project aims to provide a scalable yet practical way to measure the effectiveness of a specified altruistic effort, even if that means sacrificing optimum precision in favor of scalability and usability.

The deliverable goal of this project and its research is to provide software capable of providing an inexact but reasonable and practically usable calculation of QALYs based on a series of user inputs. The ideal end result is a platform for computation that generates calculations based on a database of Quality of Life Reducers, their paired coefficients, and user inputted parameters. With a database of Quality of Life Reducers and their coefficients, it becomes plausible to generate inexact but plausible QALY calculations at scale, at least within the decided, applicable limitations of scope.

This project hopes to develop a system capable of calculating QALY scores, in order to provide a readily available, reliably consistent, and scalable solution for altruism applications.

# Prototype Solution Approach

In order to accomplish the project goal, my current planned approach is to accomplish the following:

1. Develop a Database of accepted and appropriate Quality of Life Reducers.
  1. A database of accepted and appropriate Quality of Life Reducers will need to be developed. This should include only reducers that fit criteria that determine the reducers can be plausibly compared to other reducers when paired with user inputted parameters. The goal is to develop a list of 300-1000 Quality of Life Reducers that fit the determined criteria.
  2. Approach for Developing Quality of Life Reducer Database: The current proposed solution for developing this database is to source existing databases of what equates to what I refer to as [Quality of Life Reducers](#_8zhgb84pnvyx), and apply a manual filtering and omission process to only include reducers that fit the determined criteria.
  3. Quality of Life Reducer Criteria
    1. Reducer must possess a practical level of precision.
      1. For example, "Lack of Personal Freedom," "Lack of Access to Education," and "Cancer" are too vague and should be narrowed down to more precise reducers such as "Lack of Freedom of Religion," "Lack of Access to Primary Education," and "Lung Cancer."
      2. A practical level of precision does not necessarily need to be the highest level of precision. For example, for "Lung Cancer," specifying each stage of lung cancer will not be enforced, even though it should be acknowledged there are differences in quality of life for each stage of lung cancer. This is a sacrifice made for the benefit of scope.
    2. Reducer and life experience as a result of the reducer must be similar to any individual regardless of locality.
      1. For example, "Lack of Access to Primary Education," would be considered similarly impactful for an individual in a first world country or a third world country. While this can be debated, this criteria is primarily intended to filter out potential reducers where locality **does** cause a major difference and filter out reducers that are not applicable across the variety of human experiences. For example, "Lack of Access to Public Transportation" would violate this criteria as it would be a sincere difference in experience to lack public transportation in a rural area where it would be impractical to provide and likely unneeded versus a metropolitan, urban area where it might be an essential part of living.
    3. Reducer must possess "closeness" to the suffering it inflicts.
      1. For example, "Famine" would not be included as a reducer as famine would likely result in many major sub-reducers that cause a lower quality of life, such as the obvious "Food Insecurity," but likely as well an array of economic issues that could lead to "Housing Insecurity," disease, and other reducers with greater "closeness" to the suffering. It should be noted this criteria requires a degree of case-to-case discretion, as most any Quality of Life Reducer could be argued to possess the potential to cause some sort of sub-reducer.
      2. Discretion will be applied especially for reducers that are different enough from the expected human experience to be mentioned, even if they are indeed a catalyst for major sub-reducers. For example, "Blindness," would likely cause an individual to struggle throughout life, potentially causing sub-reducers such as "Food Insecurity," "Depression," or "Housing Insecurity." However "Blindness" should still be included as a Quality of Life Reducer as while it may result in very general sub-reducers, it also comes with effects experienced only by those suffering from blindness, and hence differs uniquely from the human experience enough to have its own inclusion.
2. Determine a Quality of Life Reducer Coefficient for all Quality of Life Reducers.
  1. Once the database of Quality of Life Reducers is determined, each reducer will require a paired coefficient representing the negative effect of the reducer. While similar databases with coefficients exist, such as the [Database of Happiness Coefficients](https://lifesatisfaction.ca/dohc/), they do not contain near enough reducers to be worth utilizing for this application, however may be useful in providing inspiration and guidelines for the production of a new database with paired coefficients. These databases are limited by the nature in which these databases were produced, which relied on extension human surveying and questionnaires.
  2. To solve the issue of producing an extensive database of Quality of Life Reducer Coefficients, methods will have to be relied upon that provide much greater scalability than questionnaires and surveys. Therefore, I hypothesize that utilizing the new technology of Large Language Models could potentially provide a usable solution. This is my proposed approach:
  3. LLMs, such as GPT-3, operate by producing answers to queries based on an accumulation of data sourced from all forms of human-generated text and data. LLMs in nature also provide a degree of randomness, meaning that the same query can provide different responses from one one instance to another. This is seen as a positive effect, as when an LLM provides different answers to the same query, it simulates difference in opinion a sample population of humans would provide, as the LLM aggregates its training data and if there is conflict, may side with one position of opinion over another. The hope is that upon thousands of repetitions the LLM produces rates of opinion similar to that which a sample population of humans would provide. Therefore, the idea is to utilize LLMs as a scalable substitute for human surveying and as a questionnaire to develop coefficients for the database of Quality of Life Reducers. In theory, with the aptitude LLMs have shown to have in reference to being able to reflect not only the denotation but the connotation of the aggregation of human data they are trained on, I believe this approach may be able to act as substitution with acceptable imitation of the opinions and decision making behavior of human surveying, while providing much greater accessibility and scalability in generating vast volumes of responses.
  4. Methodology:
    1. To develop coefficients utilizing the LLM approach, I propose that the most accurate yet simple and reliable approach would be to utilize repeated and extensive comparison between 2 Quality of Life Reducers. For example, the LLM would be asked the question "Which would you predict more individuals would consider to have a more severe negative impact on quality of life for a single year: Food Insecurity or Housing Insecurity? Answer "1" for Food Insecurity or "2" for Housing Insecurity."

This method was tested manually with Chaptgpt to

provide a proof of concept. Upon prompting Chatgpt

with this prompt 10 times, with each prompt being

given in a new "chat" instance (to minimize influence of

previous prompt/answer combinations on new

prompt/answer combinations) Chatgpt answered "2"

(Housing Insecurity) 9 times and "1" (Food Insecurity) 1

time. In development, this would be done using the

GPT OpenAI API and not manual interfacing with

Chatgpt.

The LLM would be asked to compare all Quality of Life Reducers to each other, with rigorous repetition. In theory, these comparisons and their responses conducted in volumes of 100,000s or even 1,000,000s when parsed by an appropriate algorithm could produce a ranking of Quality of Life Reducers. If a ranking can be developed, from the least impactful reducer to the most impactful reducer, then the ranking itself would be an imprecise yet usable coefficient. Of course, utilizing ranking as the coefficient would result in the margin between any two rankings being surely different than the margin between any other two rankings, yet the hope is that if the quantity of reducers in the database is large enough, the difference in these margins would be insufficient enough in order for the rankings to be practically usable as coefficients.

1. Determine appropriate user parameters that will be included along with the Quality of Life Reducer Coefficient(s) to determine a QALY score.
  1. In order for this project to have practical applications for producing a QALY score for an altruistic effort, at least some external factors must be allowed as user input. These factors will be additional coefficients that will affect the end QALY score. These factors will be the responsibility of the user to accurately produce. There are 3 factors that are currently allowed, and the intention is that many of the more nuanced external factors that are implausible to include into the computation can be essentially translated into these 3 factors. There will be 2 categories to choose from that determine the external factors available to the user. These categories are **Preventative Action** and **Reactive Action.** Preventative Action defines altruistic actions taken to prevent a certain Quality of Life Reducer from taking effect (e.g vaccines, distributing awareness brochures, etc.). Reactive Action defines efforts taken to remedy an existing Quality of Life Reducer (building a water pump for clean water insecurity, medical treatments etc.). All of these factors are up to the user to determine, and these factors may be difficult or tedious for the user to determine in certain situations. This is an unfortunate but necessary limitation. The goal of this application is not to be all-knowing, but instead to do the heavy lifting of QALY computation and allow the user to input a minimum number of external factors that are specific to their altruistic effort in question.

The three available factors: **Expected Years of Relief, Expected Individuals Affected By Relief,** and **Expected Likelihood of Success**.

    1. **Expected Years of Relief** - Preventative and Reactive

The first external factor to include is the expected years of relief from the Quality of Life Reducer.

Behavior for Preventative Action - For preventative action, this factor will represent the average amount of years an individual in question would suffer from the Quality of Life Reducer the preventative action is looking to prevent. For example, if the preventative action is distributing Syphilis awareness brochures to a vulnerable region, the expected years of relief would be the average number of years an individual would suffer from the Syphilis if they contracted it. This is the responsibility of the user to determine.

Behavior for Reactive Action - For reactive action, this factor will represent the average amount of years an individual in question would continue to suffer if the reactive action was not taken. For example, if the reactive action is distributing treatments of Syphilis, the expected years of relief would be the average number of years an individual would suffer from the disease if they had not received treatment. This is the responsibility of the user to determine. For another example, if the reactive effort is building a water pump in a community suffering from clean water insecurity, the expected years of relief would simply be the number of years the water pump is expected to stay operational, as the expected years of relief would be the same for all individuals that benefit from it.

    1. **Expected Individuals Affected by Relief** - Preventative and Reactive

Behavior for Preventative Action -

For preventative action, this

factor would represent the estimated number of

individuals that would be prevented from suffering had

the preventative action not been taken. For example, if 1,000,000 brochures regarding Syphilis awareness and how to mitigate risk of contraction are distributed to a region vulnerable to the virus, the expected individuals affected by relief would not be 1,000,000, but instead be the estimated number of individuals that would have contracted Syphilis had the preventative action not been taken. Another common example is the distribution of vaccines. If 10,000 vaccines are distributed, the number of expected individuals affected by relief would likely not be 10,000, but instead be the number of individuals that would likely contract whatever disease or virus the vaccine is trying to prevent had the vaccines not been distributed. In the case of preventative actions, the user **should not** take into consideration the effect of the spread of a disease or virus that is inhibited due to greater herd immunity introduced by the influx of the vaccine. This sacrifices optimum accuracy of the positive effect of the preventative action, but has been decided to be necessary to maintain scope. Once again, this number is up to the user to determine, which may be difficult.

Behavior for Reactive -

For reactive action, this factor would represent the individuals who received the reactive action. Returning to the water pump example, the number of individuals that the water pump relieved from clean water insecurity would be the number of expected individuals affected by relief. For the Syphilis example, the number of individuals who received treatment would be the number of expected individuals affected by relief. The user should not consider the expected spread of Syphilis that is inhibited due to the Syphilis treatments.

    1. **Expected Likelihood of Success** - Reactive

The expected likelihood of success factor **only** applies to reactive actions. This is due to the differing behavior of preventative actions. We have asked the user to use the number of individuals that would have otherwise suffered from the Quality of Life Reducer in the number of expected individuals affected by relief. Once the user does that, due to the nature of preventative actions, the expected likelihood of success for the expected individuals affected by relief is 100%, because the expected individuals affected by relief is the number of individuals that never had to suffer from the Quality of Life Reducer, and otherwise likely would have. However for reactive actions, there is the additional mechanism that the reactive action may not be 100% successful in remedying the Quality of Life Reducer for the expected individuals affected by relief.

Behavior for Reaction Actions - This will be inputted in a percentage out of 100, representing the percentage of individuals affected by relief that are likely to successfully experience relief. Returning to the water pump example, this would likely be near 100%, as it is a high chance the water pump successfully provides relief from clean water insecurity for all affected individuals in the community. Alternatively, for the treatment, Syphilis example, the expected likelihood of success would be the percentage of individuals who were administered treatment that are likely to be relieved from suffering from Syphilis. Other nuances, such as partial remission of a disease but not complete remission due to treatment will not be considered for concerns of scope and simplicity. On an individual basis, the Quality of Life Reducer is either removed or it is not. The expected likelihood of success is the percentage of individuals who are likely to have the reducer removed due to the reactive action. This is another sacrifice of accuracy and precision to prioritize scope. It should be remembered that this project prioritizes practicality, simplicity, and scalability over optimum precision.

# Application Technology Stack

- **Frontend** - React.js (create-react-app)
  - Chosen mainly for my experience with working with React.
- **Backend** - Django
  - For Python's ability to work well with LLM integrations.
- **DB** - Postgresql
  - This project is expected to require a strict and well organized database schema, which a relational database like Postgresql would provide.
  - Additionally, Django works best with relational databases and has little support for databases like MongoDB.

# Project Requirements

1. High Level Components:
  1. Database of accepted **Quality of Life Reducers**
  2. Database of **Quality of Life Reducer Coefficients**
  3. Set of accepted **User Input Parameters**
  4. **Computational Algorithm** considering user input parameters, and quality of life reducer coefficients
  5. **Backend** integrating components a-d
  6. **Frontend UI** allowing user interface with the backend system

1. Limitations and Complications
  1. Limitations of Parameters in order to maintain plausibility
    1. Due to the implausibility of developing software that can consider all factors of any one altruistic effort while maintaining scalability, careful consideration will be required to ensure that available user parameters must be limited to only parameters with the appropriate qualities to allow them to be considered.
  2. Complication of inclusion Fatal Conditions
    1. **Problem** - Since many Quality of Life Reducers have the sincere likely-hood of being fatal (Cancer, Ebola, Polio, Famine etc.), these introduce a complication. It is unreasonable to develop this software, that is based around the effect of Quality of Life Reducers and their impact on quality of life for a certain amount of years, if the likelihood of death is also included. This is because there is no scalable and reliable way to determine the life years lost when many individuals are included, due to both the inconsistency that any condition could be fatal that is dependent on the individuals preexisting conditions and other external factors, as well implausibility of determining the number of life years lost if the fatal condition is suffered by someone in an early stage of life versus someone in a later stage of life, especially when considering large groups of individuals. Instead, these details will be up to the user to provide. **Overall, I predict including the possibility of fatality into the methodology of developing the ranking of the severity of Quality of Life Reducers would result in unmanageable complexity, and would likely only result in inaccuracy, inconsistency, and compromised reliability of the LLM approach.**
    2. **Solution** - This is the proposed solution to this complication:
      1. First, make clear to the user that all Quality of Life Reducers do not take into consideration the fatality of the condition. For example, food insecurity would take into consideration the quality of life lost suffering from food insecurity, but **not include** the chance of death from food insecurity.
      2. Secondly, **"Possible Fatality"** will be included as an option for a Quality of Life Reducer. This will act as coverage for an edge case, and be placed at the top of the rankings as the most severe Quality of Life Reducer. Possible Fatality will be an umbrella option that covers all conditions and situations that have a since possibility for fatality. It should be noted that many possibly fatal quality of life reducers will be included due to their negative effects on an individual before the reducer turns fatal, however if the user wishes to focus on the possibility of fatality they must choose that option as it will not be considered otherwise.
      3. Thirdly, it should be noted the external factors the user can provide now come with a possibly altered meaning. The **expected years of relief** user parameter represents the user's expected years of life that the affected group would have lost had the condition that posed the possibility of fatality had not been removed; this will need to be an average of the individuals considered, and will be determined by the user. Alternatively, an option for **aggregated expected years of relief of all individuals** is being considered for inclusion. This aggregation option would remove the **expected individuals affected by relief** factor from being included, which would be unselectable for the user in the frontend. Otherwise **expected individuals**** affected by relief **would have the same meaning as any other Quality of Life Reducer option.** Expected likelihood of success** would represent the likelihood that the Possibile Fatality is removed.
      4. Lastly, when the Possible Fatality option is selected, the user will be given an additional external factor to include. This is " **Expected Likelihood of Fatality**." This option will be exclusive to the Possible Fatality Quality of Life Reducer, and will represent the likelihood that the condition would turn fatal for the average individual in question. This is not the same as **expected likelihood of success** , as that represents the expected likelihood of success in remedying the Possible Fatality, and **expected likelihood of fatality** represents the likelihood the Quality of Life Reducer becomes fatal. For plausibility of scope, the sacrifice will have to be made for this to be an average among all the individuals considered, and the user will not be able to input different values on a user to user basis.
2. Functional Requirements:
  1. User can choose an option from the list of predetermined Quality of Life Reducers to be considered in QALY computation equation (Must have).
  2. Simple search bar for Quality of Life Reducers (Must have).
  3. User can input numerical values for various External Factors to be considered in QALY computation equation (Must have).
  4. Users can view the Quality of Life Reducers Ranking so that the user can make their own determinations on the validity of the platform (Must have).
  5. Frontend elements must have informative tooltips and elaborations to help the user understand how calculations are determined, and to help the user understand the expected input (Must have).
  6. Side by side comparison of two different QALY calculations with digestible analytics (Could have).
  7. Login functionality and user can maintain history of previous calculations (Could have).
  8. Users can provide their own opinions that can affect the ranking of the Quality of Life Reducers that would, either in a upvote/downvote system, or in survey form with questions similar to those posed to the LLM (Could have).
  9. Since the Quality of Life Reducers will be provided in a predetermined list selection format, there might be a search bar that utilizes LLM AI or some type or search engine that allows users to enter a term that might be a synonym for an option in the drop down list. This may be necessary as the intention is for the list to be very long, and often the same condition or situation in altruism or health may be referred to by different terms (ex: food insecurity, malnutrition, hunger are all possible synonyms) (Could have).
3. User Experience (UX) and User Interface (UI)
  1. Pages
    1. Landing Page: Provides brief overview of the purpose and function of the application
    2. About Page: More in depth information of the application and process of how the database of Quality of Life Reducers and their coefficients were developed, how the the ranking system works, and limitations of the platform including the subjective nature of the ranking system and that the user should see the platform as an assistive tool and not rely on the platform as a perfectly objective, infallible source of truth and instead always rely on their own research and decision making abilities in order to determine which altruistic efforts produce the greatest positive impact.
    3. User-Input User Interface Page: This page is where the user will choose their Quality of Life Reducer in question and input their case-specific external factors.
    4. Results Page: This page will visually display the results of the computation process to the user, with the QALY score being the focus of the results page. It should make an effort to represent how the calculation and external factors are affecting the QALY score visually.
4. Data and Database Requirements
  1. The bulk of the data schema will concern the Quality of Life Reducers and their coefficients. This is not a final schema, and is subject to change.
    1. Quality of Life Reducers Table:

Each row will represent a single Quality of Life Reducer.

Columns:

- Id (PK) (int)
- Quality of Life Reducer Name (varchar)
- Quality of Life Reducer Coefficient/Ranking (int)

    1. Quality of Life Reducers LLM Surveying Log Table:

Each row will represent a single comparison question and answer that will be prompted to the LLM during the development of the Quality of Life Reducers ranking system.

Columns:

- Id (PK) (int)
- Compared Quality of Life Reducer 1 (FK) (int)
- Compared Quality of Life Reducer 1 Name (varchar)
  - This field exists to allow myself to quickly check to be able to spot LLM hallucinations that may occur
- Compared Quality of Life Reducer 2 (FK) (int)
- Compared Quality of Life Reducer 2 Name (varchar)
  - This field exists to allow myself to quickly check to be able to spot LLM hallucinations that may occur
- LLM determined Quality of Life Reducer with greater quality of life impact (FK) (int)
- LLM determined Quality of Life Reducer with greater quality of life impact Name (varchar)
  - This field exists to allow myself to quickly check to be able to spot LLM hallucinations that may occur

1. Integration Requirements
  1. Open AI API Integration
    1. The likely LLM that will be used is GPT-3, however this is subject to change and other proven LLMs, such as GPT-4, may be considered. LLM hallucination rate will be considered. The degree of ease of parsing the responses into a consistent format will be considered. API token cost will be a consideration due to the high volume of prompts that will be required to be executed.
2. Deployment and Hosting
  1. Target Platform - Web
  2. RDS Hosting - AWS RDS
  3. Web Application Hosting - Heroku

Assuming the project achieves its goal, successful in being practically applicable, a public donation page will likely be created or funding from potentially interested organizations such as Effective Altruism will likely be applied for in order to support hosting cost. However, I am prepared to fund the cost of both Open AI API use, and hosting costs at minimum throughout the course of the development of the project and in the short-term after.

1. Testing and Quality Assurance
  1. Frontend Blackbox Testing
    1. Testing to ensure the frontend operates as intended, more specific tests will be determined as the specific setup of the frontend is determined
  2. Backend Unit Testing
    1. Unit testing will be implemented to ensure that the proper calculations are produced, assuming the data it is based on is valid. More specific testing will be determined as the backend is determined.
2. User Stories
  1. As a user, I want to be able to calculate the quantity of QALYs that would be produced from a specific altruistic effort in order to compare different altruistic efforts
  2. As a user, I want to be able to input specific external factors about an altruistic effort in order to generate a calculated QALY number that takes into account some external factors.

# Potential Major CS Research Component(s)

- **Exploring and Defining Techniques for Applying Data Consistency Standards on External Data Sourced From Multiple Sources**
- Data will be sourced from multiple sources and that data will need to be aggregated into consistent formats. Possible topics for research include Data Wrangling, Data Normalization, and Data Governance.
- **Utilizing Large Language Model Training in order to Generate Standardized QALY Metric**
- In order to address the problem of standardizing the scaling of subjective measures such as comparing health or life conditions, Large Language Models will be utilized.

# Research Hypothesis

- Utilizing comparison based, LLM surveying and questionnaires can provide a substitution for human surveying and questionnaires while providing the benefit of being economical, efficient, accessible, and scalable.

# Study Outcomes

- Production web application that allows users to calculate Quality Adjusted-Life Years (QALYs) based on user-provided parameters
- **Validate Research Hypothesis with User Studies**
  - Conduct human surveying and questionnaires in the same method it is applied to the LLM approach, in order to generate a human generated Quality of Life Reducer Ranking, and compare it to the LLM generated Quality of Life Reducer Ranking in order to analyze the differences in LLMs and human opinions on the compared severity of Quality of Life Reducers.
  - Develop research report regarding the findings

