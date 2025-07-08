// --- O: Open/Closed Principle (OCP) ---

/**
 * This one file follow 2 principle:
 * 1. O: Open/Closed Principle (OCP)
 * Notifier is open for extension (you can add new notifiers like PushNotifier into this interface but closed for modification (you don't need to change NotifierService).
 * 2. L: Liskov Substitution Principle (LSP)
 *  EmailNotifier & SMSNotifier can be swapped as Notifier without breaking anything.
 */
import { Injectable } from "@nestjs/common";

// ✅ Good: Add new notifiers without modifying NotifierService
export interface Notifier {
    notify(to: string, message: string): void;
}

@Injectable()
export class EmailNotifier implements Notifier {
    notify(to: string, message: string) {
        console.log(`Email sent to ${to}: ${message}`);
    }
}

@Injectable()
export class SMSNotifier implements Notifier {
    notify(to: string, message: string) {
        console.log(`SMS sent to ${to}: ${message}`);
    }
  }