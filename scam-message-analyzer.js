/**

 * ToolMixo Scam Message Signals

 *

 * A browser-side heuristic helper. It does not open links, inspect a sender,

 * or guarantee that a message is safe. Verify unexpected messages through an

 * official channel that you open independently.

 */

export function assessScamMessage(input = "") {
  
  const text = String(input).toLowerCase().replace(/\s+/g, " ").trim();
  
  const checks = [
    
    [/urgent|immediately|act now|final warning|asap|limited time|within \d+ (hours?|minutes?)/, "Urgency or pressure language", 18],
    
    [/verify|confirm|update.{0,30}(account|identity|payment|billing)/, "Requests account or identity verification", 16],
    
    [/password|one[- ]?time (code|passcode)|\botp\b|security code|verification code/, "Requests sensitive credentials or codes", 25],
    
    [/gift card|crypto|bitcoin|wire transfer|bank transfer|payment required|processing fee/, "Requests unusual payment methods", 22],
    
    [/https?:\/\/|www\.|bit\.ly|tinyurl|t\.co|shorturl|click (the )?link|login here/, "Pushes a link or shortened URL", 14],
    
    [/suspend|suspended|locked|disable|legal action|arrest|penalty|fine/, "Uses a threat or account-loss warning", 17],
    
    [/you(?:'ve| have) won|winner|prize|claim.{0,25}(reward|prize|refund)/, "Promises an unexpected prize or refund", 14],
    
  ];
  

  
  const matches = checks.filter(([pattern]) => pattern.test(text));
  
  const score = Math.min(100, matches.reduce((total, [, , weight]) => total + weight, 0));
  
  const level = score >= 55 ? "high" : score >= 20 ? "medium" : "low";
  

  
  return {
    
    score,
    
    level,
    
    signals: matches.map(([, label]) => label),
    
    guidance: level === "high"
      
      ? "Do not reply, click links, or share codes. Open the organisation's official app or website yourself to verify."
      
      : level === "medium"
      
        ? "Pause before acting. Verify through an official contact channel that you open independently."
      
        : "No strong common patterns were found, but unexpected messages can still be unsafe. Verify before sharing information.",
    
  };
  
}



























