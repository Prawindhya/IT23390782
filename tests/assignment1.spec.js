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
    input: 'sindhu kiyala ivara karal mama passe kannam',
    expected: 'මම සින්දු කියල ඉවර කරල පස්සෙ කන්නම්'
  },
  {
    id: 'Pos_Fun_0003',
    description: 'Complex conditional sentence',
    input: 'oyaa magee hodhi eka hadhanavaa nQQ mama rotii tika hadhannam.',
    expected: 'ඔයා මගේ හොදි එක හදනවා නං මම රොටී ටික හදන්නම්.'
  },
  {
    id: 'Pos_Fun_0004',
    description: 'Polite request form',
    input: 'karuNaakaralaa mata udhav karanna',
    expected: 'කරුණාකරලා මට උදව් කරන්න'
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
    input: 'magea facebook account eka SIM swap attack harahaa kavudha hack karalaa',
    expected: 'මගේ facebook account එක SIM swap attack හරහා කවුද hack කරලා'
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
    input: 'siyalu balaporoththu ituvena subama suba aluth avurudhdhak veevaa !',
    expected: 'සියලු බලපොරොත්තු ඉටුවෙන සුබම සුබ අලුත් අවුරුද්දක් වේවා !'
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
    expected: 'මම හාල් 10Kg අරගෙන ගෙදර එද්දි 10.00 PM වගේ වෙයි.'
  },
  {
    id: 'Pos_Fun_0016',
    description: 'Repeated word emphasis',
    input: 'dhaen dollar ekath tika tika vaedi venavaa. ee nisaa mQQ ada ada inne rata yanna baeri veevi kiyalaa',
    expected: 'දැන් dollar එකත් ටික ටික වැඩි වෙනවා. ඒ නිසා මං අඩ අඩ ඉන්නේ රට යන්න බැරි වේවි කියලා'
  },
  {
    id: 'Pos_Fun_0017',
    description: 'Multi-word collocation',
    input: 'api dhaen thee bonavaa',
    expected: 'අපි දැන් තේ බොනවා'
  },
  {
    id: 'Pos_Fun_0018',
    description: 'Input with line breaks',
    input: 'mama samapoosha kaevaa. iitapasse mama paasal yanavaa.',
    expected: 'මම සමපෝෂ කෑවා. ඊටපස්සේ මම පාසල් යනවා.'
  },
  {
    id: 'Pos_Fun_0019',
    description: 'Multiple spaces handling',
    input: 'ammee           mama gedhara ena gaman inne bath uyalaa thiyanna ',
    expected: 'අම්මේ           මම ගෙදර එන ගමන් ඉන්නේ බත් උයලා තියන්න '
  },
  {
    id: 'Pos_Fun_0020',
    description: 'Pronoun variation (They)',
    input: 'Eyaala adha havasata guruthumi balanna yanavaa kiyuvaa',
    expected: 'එයාල අද හවසට ගුරුතුමි බලන්න යනවා කියුවා'
  },
  {
    id: 'Pos_Fun_0021',
    description: 'Complex punctuations',
    input: 'oya (mata) ehema kale kohomadha?',
    expected: 'ඔය (මට) එහෙම kale කොහොමද?'
  },
  {
    id: 'Pos_Fun_0022',
    description: 'English Abbreviations',
    input: 'oyaagee PIN eka venas kalee aeyi?',
    expected: 'ඔයාගේ PIN එක වෙනස් කලේ ඇයි?'
  },
  {
    id: 'Pos_Fun_0023',
    description: 'Informal command',
    input: 'adoo oya putuva tikak mehaata karanavakoo',
    expected: 'අඩෝ ඔය පුටුව ටිකක් මෙහාට කරනවකෝ'
  },
  {
    id: 'Pos_Fun_0024',
    description: 'Long paragraph input',
    input: 'Artificial Intelligence (AI) kiyanne machines valata minissu vagee hithanna, igena ganna saha prashna visadhanna puLuvan vidhihata hadhapu computer science vala ek kotasak.',
    expected: 'Artificial Intelligence (AI) කියන්නෙ machines වලට මිනිස්සු වගේ හිතන්න, ඉගෙන ගන්න සහ ප්‍රශ්න විසදන්න පුළුවන් විදිහට හදපු computer science වල එක් කොටසක්.'
  }
];

// ---------------------------------------------------------------------------
// NEGATIVE SCENARIOS
// ---------------------------------------------------------------------------
const negativeScenarios = [
  {
    id: 'Neg_Fun_0001',
    description: 'Phonetic mapping failure for wa character',
    input: 'himiwenawaa',
    expected: 'හිමිවෙනවා'
  },
  {
    id: 'Neg_Fun_0002',
    description: 'Complex Phonetic Cluster Recognition',
    input: 'aBA gediya (BA)',
    expected: 'අඹ ගෙඩිය (ඹ)'
  }
];

// ---------------------------------------------------------------------------
// UI SCENARIO
// ---------------------------------------------------------------------------
const UIScenarios = [
  {
    id: 'UI_Fun_0001',
    description: 'Check for output synchronization in real time.',
    input: 'mama gedhara yanavaa',
    expected: 'මම ගෙදර යනවා'
  }
];

// ---------------------------------------------------------------------------
// TEST SUITE
// ---------------------------------------------------------------------------
test.describe('IT3040 Assignment 1 - SwiftTranslator Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(TARGET_URL);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  // POSITIVE TESTS
  for (const scenario of positiveScenarios) {
    test(`${scenario.id}: ${scenario.description}`, async ({ page }) => {

      const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
      const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

      await inputBox.clear();
      await inputBox.fill(scenario.input);

      await page.waitForFunction((selector) => {
        const el = document.querySelector(selector);
        return el && el.textContent.trim().length > 0;
      }, '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

      const outputText = await outputBox.textContent();
      expect(outputText.trim()).toBe(scenario.expected);
    });
  }

  // NEGATIVE TESTS
  for (const scenario of negativeScenarios) {
    test(`${scenario.id}: ${scenario.description}`, async ({ page }) => {

      const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
      const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

      await inputBox.clear();
      await inputBox.fill(scenario.input);

      await page.waitForFunction((selector) => {
        const el = document.querySelector(selector);
        return el && el.textContent.trim().length > 0;
      }, '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

      const outputText = await outputBox.textContent();
      expect(outputText.trim()).toBe(scenario.expected);
    });
  }

  // UI TEST
  test('UI_Fun_0001: Real-time output update behavior', async ({ page }) => {

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

    await inputBox.clear();
    await inputBox.pressSequentially('mama', { delay: 100 });

    await page.waitForFunction((selector) => {
      const el = document.querySelector(selector);
      return el && el.textContent.trim().length > 0;
    }, '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

    let outputText = await outputBox.textContent();
    expect(outputText).toContain('මම');

    await inputBox.pressSequentially(' gedhara yanawa', { delay: 100 });
    await page.waitForTimeout(1500);

    outputText = await outputBox.textContent();
    expect(outputText.trim()).toBe('මම ගෙදර යනවා');
  });

});
