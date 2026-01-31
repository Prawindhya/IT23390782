 // tests/assignment1.spec.js
 const { test, expect } = require('@playwright/test');

 const TARGET_URL = 'https://www.swifttranslator.com/';
 
 // ---------------------------------------------------------------------------
 // 24 POSITIVE SCENARIOS
 // ---------------------------------------------------------------------------
 const positiveScenarios = [
   {
    id: 'Pos_Fun_0001',
    description: 'Simple Present Tense Sentence',
    input: 'mama roohalata yanavaa',
    expected: 'මම රෝහලට යනවා'
   },
   {
    id: 'Pos_Fun_0002',
    description: 'Compound sentence with conjunction',
    input: 'Mama sindhu kiyala  Ivara karala passe kannam.',
    expected: 'මම සින්දු කියල  ඉවර කරල පස්සෙ කන්නම්'

   },
   {
    id: 'Pos_Fun_0003',
    description: 'Complex conditional sentence',
    input: 'oyaa magee hodhi eka eka hadhanavaa nQQ mama rotii tika hadhannam.',
    expected: 'ඔයා මගේ හොදි එක එක හදනවා නං මම රොටී ටික හදන්නම්.'
   },
   {
    id: 'Pos_Fun_0004',
    description: 'Polite request form',
    input: 'karuNaakaralaa mata udhav karanna',
    expected: ' කරුණාකරලා මට උදව් කරන්න'

   },
   {
    id: 'Pos_Fun_0005',
    description: 'Direct command (imperative)',
    input: 'vahaama othanin ivath venna',
    expected: 'වහාම ඔතනින් ඉවත් වෙන්න'
   },
   {
     id: 'Pos_Fun_0006',
     description: 'Negative form usage',
     input: 'mQQ ohuta kaemathi naehae',
     expected: 'මං ඔහුට කැමති නැහැ'



   },
   {
     id: 'Pos_Fun_0007',
     description: 'Past tense variation with mixed English term',
     input: 'iiyea apea geval laga thiyena food city eka laga accident ekak vunaa.',
     expected: 'ඊයේ අපේ ගෙවල් ලග තියෙන food city එක ලග accident එකක් වුනා.'

   },
   {
     id: 'Pos_Fun_0008',
     description: 'Future tense variation',
     input: 'mama anidhdhaa havasata rata yanavaa',
     expected: 'මම අනිද්දා හවසට රට යනවා'
   },
   {
     id: 'Pos_Fun_0009',
     description: 'Plural pronoun variation',
     input: 'api havasata polata gihin badu vagayak gannavaa',
     expected: 'අපි හවසට පොලට ගිහින් බඩු වගයක් ගන්නවා'

   },
   {
     id: 'Pos_Fun_0010',
     description: 'Mixed English technical term',
     input: 'magea facebook  account eka SIM swap attack harahaa kavudha hack karalaa',
     expected: 'මගේ facebook  account එක SIM swap attack හරහා කවුද hack කරලා'

   },
   {
     id: 'Pos_Fun_0011',
     description: 'Place names in English',
     input: 'mQQ adha ammath ekka Hilton Colombo Hotel ekee kaeema kanna yanavaa',
     expected: 'මං අද අම්මත් එක්ක Hilton Colombo Hotel එකේ කෑම කන්න යනවා'


   },
   {
     id: 'Pos_Fun_0012',
     description: 'Common Greetings',
     input: 'siyalu  balaporoththu ituvena subama suba aluth  avurudhdhak veevaa !',
     expected: 'සියලු  බලපොරොත්තු ඉටුවෙන සුබම සුබ අලුත්  අවුරුද්දක් වේවා !'
   },
   {
     id: 'Pos_Fun_0013',
     description: 'Informal slang',
     input: 'Adoo dhooni gaemmak thamayi ithin. aaye supiriyak.',
     expected: 'අඩෝ දෝනි ගැම්මක් තමයි ඉතින්. ආයෙ සුපිරියක්.'
   },
   {
     id: 'Pos_Fun_0014',
     description: 'Currency and numbers',
     input: 'meake USD 1355.99k LKR valata huvamaaru vatinaakama kiiyadha?',
     expected: 'මේකෙ USD 1355.99ක් LKR වලට හුවමාරු වටිනාකම කීයද?'
   },
   {
     id: 'Pos_Fun_0015',
     description: 'Time and Units',
     input: 'mama haal 10Kg aragena gedhara edhdhi 10.00 PM vagea veyi .',
     expected: 'මම හාල් 10Kg අරගෙන ගෙදර එද්දි 10.00 PM වගේ වෙයි '


   },
   {
     id: 'Pos_Fun_0016',
     description: 'Repeated word emphasis',
     input: 'dhaen dollar ekath tika tika vaedi venavaa.ee nisaa mQQ ada ada inne rata yanna baeri veevi kiyalaa',
     expected: 'දැන් dollar එකත් ටික ටික වැඩි වෙනවා.ඒ නිසා මං අඩ අඩ ඉන්නේ රට යන්න බැරි වේවි කියලා'
   },
   {
     id: 'Pos_Fun_0017',
     description: 'Talking about studying',
     input: 'mama padham kiyawanawa',
     expected: 'මම පදම් කියවනව'
   },
   {
     id: 'Pos_Fun_0018',
     description: 'Asking to come',
     input: 'enna puluwandha',
     expected: 'එන්න පුළුවන්ද'
   },
   {
     id: 'Pos_Fun_0019',
     description: 'Talking about weather',
     input: 'adha wassa enawa',
     expected: 'අද වැස්ස එනව'
   },
   {
     id: 'Pos_Fun_0020',
     description: 'Expression of tiredness',
     input: 'mata harima saaradhaiyi',
     expected: 'මට හරිම සාරදයියි'
   },
   {
     id: 'Pos_Fun_0021',
     description: 'Asking about lunch',
     input: 'adha lunch eka mokakdha',
     expected: 'අද lunch එක මොකක්ද'
   },
   {
     id: 'Pos_Fun_0022',
     description: 'Simple past tense',
     input: 'mama giya',
     expected: 'මම ගිය'
   },
   {
     id: 'Pos_Fun_0023',
     description: 'Expressing happiness',
     input: 'mata harima santhosaiyi',
     expected: 'මට හරිම සන්තෝසයයි'
   },
   {
     id: 'Pos_Fun_0024',
     description: 'Asking to wait',
     input: 'tikak inna',
     expected: 'ටිකක් ඉන්න'
   }
 ];
 
 // ---------------------------------------------------------------------------
 // 10 NEGATIVE SCENARIOS
 // ---------------------------------------------------------------------------
 const negativeScenarios = [
   {
     id: 'Neg_Fun_0001',
     description: 'Chat shorthand "Thx" should fail to convert meaningfully',
     input: 'Thx',
     expected: 'ථx'
   },
   {
     id: 'Neg_Fun_0002',
     description: 'Incorrect stress test with missing spaces',
     input: 'mamagedharayanavaa',
     expected: 'මමගෙදරයනවා'
   },
   {
     id: 'Neg_Fun_0003',
     description: 'Numbers only input',
     input: '12345',
     expected: '12345'
   },
   {
     id: 'Neg_Fun_0004',
     description: 'Special characters only',
     input: '@#$%^&*',
     expected: '@#$%^&*'
   },
   {
     id: 'Neg_Fun_0005',
     description: 'Empty spaces only',
     input: '     ',
     expected: ''
   },
   {
     id: 'Neg_Fun_0006',
     description: 'Mixed random characters',
     input: 'xyz123',
     expected: 'xයz123'
   },
   {
     id: 'Neg_Fun_0007',
     description: 'Single character input',
     input: 'k',
     expected: 'ක්'
   },
   {
     id: 'Neg_Fun_0008',
     description: 'All caps input',
     input: 'KOHOMADHA',
     expected: 'KOHOMADHA'
   },
   {
     id: 'Neg_Fun_0009',
     description: 'Very long text without proper spacing',
     input: 'mamayanawagetharagedharakohedhayanawadhen',
     expected: 'මමයනවගෙතරගෙදරකොහෙදයනවදෙන්'
   },
   {
     id: 'Neg_Fun_0010',
     description: 'Random gibberish',
     input: 'qwerty',
     expected: 'qwඑර්තය'
   }
 ];
 
 // ---------------------------------------------------------------------------
 // TEST SUITE
 // ---------------------------------------------------------------------------
 test.describe('IT3040 Assignment 1 - SwiftTranslator Automation', () => {
 
   test.beforeEach(async ({ page }) => {
     // Navigate to the site before each test
     await page.goto(TARGET_URL);
     await page.waitForLoadState('networkidle');
     // Give the page extra time to fully load
     await page.waitForTimeout(1000);
   });
 
   // -------------------------------------------------------------------------
   // 1. POSITIVE FUNCTIONAL TESTS (24 scenarios)
   // -------------------------------------------------------------------------
   for (const scenario of positiveScenarios) {
     test(`${scenario.id}: ${scenario.description}`, async ({ page }) => {
       
       // Input field
       const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
       
       // Output field
       const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
 
       // Clear input field first
       await inputBox.clear();
       await page.waitForTimeout(500);
       
       // Enter text
       await inputBox.fill(scenario.input);
       
       // Wait for the output to contain some text (not empty)
       await page.waitForFunction(
         (selector) => {
           const element = document.querySelector(selector);
           return element && element.textContent.trim().length > 0;
         },
         '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap',
         { timeout: 10000 }
       );
       
       // Get the text content of output
       const outputText = await outputBox.textContent();
       
       // Verify
       expect(outputText.trim()).toBe(scenario.expected);
     });
   }
 
   // -------------------------------------------------------------------------
   // 2. NEGATIVE FUNCTIONAL TESTS (10 scenarios)
   // -------------------------------------------------------------------------
   for (const scenario of negativeScenarios) {
     test(`${scenario.id}: ${scenario.description}`, async ({ page }) => {
       
       const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
       const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
 
       await inputBox.clear();
       await page.waitForTimeout(500);
       
       await inputBox.fill(scenario.input);
       
       // For empty/whitespace inputs, the output might stay empty
       if (scenario.input.trim() === '') {
         await page.waitForTimeout(2000);
         const outputText = await outputBox.textContent();
         expect(outputText.trim()).toBe(scenario.expected);
       } else {
         // Wait for output
         await page.waitForFunction(
           (selector) => {
             const element = document.querySelector(selector);
             return element && element.textContent.trim().length > 0;
           },
           '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap',
           { timeout: 10000 }
         );
         
         const outputText = await outputBox.textContent();
         expect(outputText.trim()).toBe(scenario.expected);
       }
     });
   }
 
   // -------------------------------------------------------------------------
   // 3. UI TEST SCENARIO (1 scenario)
   // -------------------------------------------------------------------------
   test('Pos_UI_0001: Real-time output update behavior', async ({ page }) => {
     
     const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
     const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
 
     await inputBox.clear();
     await page.waitForTimeout(500);
     
     // Type "mama"
     await inputBox.pressSequentially('mama', { delay: 100 });
     
     // Wait for output to appear
     await page.waitForFunction(
       (selector) => {
         const element = document.querySelector(selector);
         return element && element.textContent.trim().length > 0;
       },
       '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap',
       { timeout: 5000 }
     );
     
     let outputText = await outputBox.textContent();
     expect(outputText).toContain('මම');
 
     // Continue typing " yanawa"
     await inputBox.pressSequentially(' yanawa', { delay: 100 });
     
     // Wait for updated output
     await page.waitForTimeout(2000);
     
     outputText = await outputBox.textContent();
     expect(outputText.trim()).toBe('මම යනව');
   });
 
 });