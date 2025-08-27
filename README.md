# Kontexterweiterung-von-KI-Anwendungen-mit-dem-Model-Context-Protocol-MCP---Studienarbeit
Repository zur Studienarbeit mit dem Titel: Kontexterweiterung von KI-Anwendungen mit dem Model Context Protocol (MCP)

In diesem Repository sind zu finden: 
der für den in der Studienarbeit beschriebenen Versuch geschriebene Code und
die zum Schreiben der Arbeit verwendeten Prompts.

## Zum Code
**Ausführung**

**MCP**
1. Starte einen Server mit: `npx tsx src/mcp/mcp-serverOne.ts` oder `npx tsx src/mcp/mcp-serverTwo.ts`

2. Starte ngrok mit: `ngrok http 3000` oder `ngrok http 3000`

    a)  Wenn der Ausführenden Person keine kostenpflichtige ngrok Version vorliegt, kann die ngrok.yml zu folgendem umgeschrieben werden und danach die tunnel mit `ngrok start --all` gestartet werden:
```
version: "3"
agent:
    authtoken: <dein ngrok-Authtoken>

tunnels:
  server_add:
    proto: http
    addr: 3000
  server_sub:
    proto: http
    addr: 3001
```

4. Kopiere die HTTPS-Forwarding-URLs

5. Setze die ngrok-URLs in einen Client ein

6. Starte den Client mit: `npx tsx src/mcp/mcp-clientOne.ts` oder `npx tsx src/mcp/mcp-clientTwo.ts`

---

**API**
1. Starte den API-Server mit: `npx tsx src/api/api-serverOne.ts`

2. Starte den einfachen Client mit: `npx tsx src/api/api-clientOne.ts`

3. Starte den zweiten API-Server mit: `npx tsx src/api/api-serverTwo.ts`

4. Starte den komplexeren Client mit: `npx tsx src/api/api-clientTwo.ts`

## Zu der KI-Nutzung

**Generelles**

Die Arbeit wurde fast vollständig von einer KI generiert, was im Programm Gemini Desktop erfolgte. Das verwendete Modell war Gemini 2.5 Pro mit der Canvas Funktion aktiviert. Diese Funktion erlaubt es dem Nutzer nach Generierung eines Textes direkt im Programm selbst Änderungen vorzunehmen. Die Bearbeitung in Canvas kann mithilfe von der KI und dem Kontext des Chatverlaufs erfolgen ohne, dass ein neuer Chat erstellt werden muss. Da hierbei auf spezifische Stellen im Text eingegangen werden kann, gibt es keinen klassischen Prompt-Chatverlauf. Deswegen sind im Folgenden nur die Eingangsprompts zu den einzelnen Kapiteln aufgeführt.
Bezüglich der eigenen Leistung: Selbstverständlich wurde der komplette Text nach Generierung überarbeitet, auf Fehler, Logik und Vollständigkeit überprüft und an vielen Stellen umgeschrieben. Außerdem basiert die Generierung auf eigener Recherche und selbst erstelltem Code.

**Prompts**

*Prompt zu Abschnitt Grundlagen:*

Situation:
Ich schreibe eine Studienarbeit mit dem Titel „Kontexterweiterung von KI-Anwendungen mit dem Model Context Protocol (MCP)“. Ich behandle die Forschungsfrage: „Inwieweit verbessert das Model Context Protocol (MCP) die Anbindung externer Werkzeuge an KI-Anwendungen im Vergleich zu individueller API-Integrationen?“. Die Studienarbeit ist etwa 20 Textseiten lang. Dafür habe ich die Quellenarbeit bereits beendet und meine Ergebnisse hier angehängt.

Aufgabe:
Für den Teil „Grundlagen“ brauche ich mehrere Seiten, auf denen ich das Model Context Protocol erkläre. Dieser Teil kommt nach der Einleitung und vor dem Methodik Teil, in dem ich erkläre, wie ich an die Frage rangegangen bin. Deine Aufgabe ist es, mir den Grundlagenteil zu schreiben. Beachte, dass die Einleitung an diesem Teil der Arbeit bereits gelesen wurde. Es ist also nicht erwünscht, nochmal in das Thema einzuführen. Binde dabei die drei angehängten Grafiken mit ein. Sie müssen nicht beschrieben werden. Schreibe einfach in den Text „Siehe Abbildung X“ und ich werde sie dann selbst an eine geeignete Stelle einsetzen.

Anforderungen.
Der Schreibstil soll wissenschaftlich sein. Keine Füllwörter, keine verschachtelten Sätze und keine Stichpunkte. Es gelten HÖCHSTE Qualitätsanforderungen. Da meine Zielgruppe ein Fachkundiges Publikum ist, soll auch die technische Implementierung des Protokolls ausführlich beschrieben werden. Es dürfen keine Fakten genannt werden, die nicht in den dir zur Verfügung stehenden Quellen stehen. Jede Aussage MUSS durch eine Quelle belegt sein. Nimm dafür AUSSCHLIEßLICH die Infos aus meinem Quellendokument, welches ich angehängt habe. Priorisiere die Quelle 7. 

Zitierstil:
Beispiel: „MCP Server sind Programme, die Kontext und Operationen bereitstellen. [7]“
Die Fußzeile muss du nicht beachten, das mache ich dann. Du musst nur immer die Nummer hinter den Satz schreiben, dass ich weiß, auf welche Quelle du dich bezogen hast.



*Prompt zu Abschnitt Einleitung:*

Situation:
Ich schreibe eine Studienarbeit mit dem Titel „Kontexterweiterung von KI-Anwendungen mit dem Model Context Protocol (MCP)“. Ich behandle die Forschungsfrage: „Inwieweit verbessert das Model Context Protocol (MCP) die Anbindung externer Werkzeuge an KI-Anwendungen im Vergleich zu individueller API-Integrationen?“. Die Studienarbeit ist etwa 20 Textseiten lang. Dafür habe ich die Quellenarbeit bereits beendet und meine Ergebnisse hier angehängt. 

Aufgabe:
Deine Aufgabe ist es, mir die Einleitung zu schreiben. Angehängt sind die Anforderungen an die Einleitung aus den Richtlinien und ein Teil des Inhalts der Einleitung, der nun von dir formuliert werden soll.

Anforderungen.
Der Schreibstil soll wissenschaftlich sein. Keine Füllwörter, keine verschachtelten Sätze und keine Stichpunkte. Es gelten HÖCHSTE Qualitätsanforderungen. Meine Zielgruppe ist ein Fachkundiges Publikum. Es dürfen keine Fakten genannt werden, die nicht in den dir zur Verfügung stehenden Quellen stehen. Jede Aussage MUSS durch eine Quelle belegt sein. Nimm dafür AUSSCHLIEßLICH die Infos aus meinem Quellendokument, welches ich angehängt habe.

Zitierstil:
Beispiel: „MCP Server sind Programme, die Kontext und Operationen bereitstellen. [7]“
Die Fußzeile muss du nicht beachten, das mache ich dann. Du musst nur immer die Nummer hinter den Satz schreiben, dass ich weiß, auf welche Quelle du dich bezogen hast.



*Prompt zu Abschnitt Stand der Forschung:*

Situation:
Ich schreibe eine Studienarbeit mit dem Titel „Kontexterweiterung von KI-Anwendungen mit dem Model Context Protocol (MCP)“. Ich behandle die Forschungsfrage: „Inwieweit verbessert das Model Context Protocol (MCP) die Anbindung externer Werkzeuge an KI-Anwendungen im Vergleich zu individueller API-Integrationen?“. Die Studienarbeit ist etwa 20 Textseiten lang. Dafür habe ich die Quellenarbeit bereits beendet und meine Ergebnisse hier angehängt. 

Aufgabe:
Deine Aufgabe ist es, mir den Teil Stand der Forschung zu schreiben. Dabei sollen vor allem folgende Punkte beachtet werden: Wer hat dazu schon was gesagt? (aktueller Stand der Forschung) Gartner und Forrester Prognosen, Abgrenzung, Beschreiben der Probleme durch andere Autoren. Außerdem habe ich die vorangegangen Seiten (Abbildungen ausgelassen) mit angehängt, damit du drauf achten kannst, dass es keine Dopplungen gibt.

Anforderungen.
Der Schreibstil soll wissenschaftlich sein. Keine Füllwörter, keine verschachtelten Sätze und keine Stichpunkte. Es gelten HÖCHSTE Qualitätsanforderungen. Meine Zielgruppe ist ein Fachkundiges Publikum. Es dürfen keine Fakten genannt werden, die nicht in den dir zur Verfügung stehenden Quellen stehen. Jede Aussage MUSS durch eine Quelle belegt sein. Nimm dafür AUSSCHLIEßLICH die Infos aus meinem Quellendokument, welches ich angehängt habe. Es ist sehr wichtig, dass dieser Teil keine Aussagen aus den vorangegangenen Kapiteln wiederholt. Auch eine Einleitung in dieses Kapitel ist ausdrücklich unerwünscht!

Zitierstil:
Beispiel: „MCP Server sind Programme, die Kontext und Operationen bereitstellen. [7]“
Die Fußzeile muss du nicht beachten, das mache ich dann. Du musst nur immer die Nummer hinter den Satz schreiben, dass ich weiß, auf welche Quelle du dich bezogen hast.



*Prompt zu Abschnitt Methodik:*

Situation:
Ich schreibe eine Studienarbeit mit dem Titel „Kontexterweiterung von KI-Anwendungen mit dem Model Context Protocol (MCP)“. Ich behandle die Forschungsfrage: „Inwieweit verbessert das Model Context Protocol (MCP) die Anbindung externer Werkzeuge an KI-Anwendungen im Vergleich zu individueller API-Integrationen?“. Die Studienarbeit ist etwa 20 Textseiten lang. Die Kapitel 1. Einführung, 2. Grundlagen und 3. Stand der Forschung sind bereits fertig und hier angehängt. Es fehlen noch die Teile 4. Vorgehen, 5. Ausführung, 6. Auswertung und 7. Fazit.

Aufgabe:
Deine Aufgabe ist es, mir den kurzen Teil 4. Vorgehen zu schreiben. Angehängt ist ein Dokument mit dem Plan für meine Vorgehensweise.

Anforderungen.
Der Schreibstil soll wissenschaftlich sein. Keine Füllwörter, keine verschachtelten Sätze und keine Stichpunkte. Es gelten HÖCHSTE Qualitätsanforderungen. Meine Zielgruppe ist ein Fachkundiges Publikum. Es ist sehr wichtig, dass dieser Teil keine Aussagen aus den vorangegangenen Kapiteln wiederholt. Auch eine Einleitung in dieses Kapitel ist ausdrücklich unerwünscht!



*Prompt zu Abschnitt Ausführung:*

Situation:
Ich schreibe eine Studienarbeit mit dem Titel „Kontexterweiterung von KI-Anwendungen mit dem Model Context Protocol (MCP)“. Ich behandle die Forschungsfrage: „Inwieweit verbessert das Model Context Protocol (MCP) die Anbindung externer Werkzeuge an KI-Anwendungen im Vergleich zu individueller API-Integrationen?“. Die Studienarbeit ist etwa 20 Textseiten lang. Die Kapitel 1. Einführung, 2. Grundlagen, 3. Stand der Forschung und 4. Vorgehen sind bereits fertig und hier angehängt. Es fehlen noch die Teile 5. Ausführung, 6. Auswertung und 7. Fazit.

Aufgabe:
Deine Aufgabe ist es, mir den Teil 5. Ausführung zu schreiben. Angehängt ist der Code, den ich geschrieben habe. Anhand dieses Codes sollte ich zeigen können, inwieweit die Nutzung des MCP besser ist. Gehe auch darauf ein, dass zuerst nur api-clientOne.ts und api-serverOne.ts existieren und um die Erweitbarkeit zu testen dann api-serverTwo.ts erstellt wird. api-clientTwo.ts ist dann sozusagen der aktualisierte api-clientOne.ts. Analog dazu passiert etwas ähnliches mit dem MCP Teil.

Anforderungen.
Der Schreibstil soll wissenschaftlich sein. Keine Füllwörter, keine verschachtelten Sätze und keine Stichpunkte. Es gelten HÖCHSTE Qualitätsanforderungen. Meine Zielgruppe ist ein Fachkundiges Publikum.



*Prompt zum Abschnitt Auswertung:*

Situation: 
Ich schreibe eine Studienarbeit mit dem Titel „Kontexterweiterung von KI-Anwendungen mit dem Model Context Protocol (MCP)“. Ich behandle die Forschungsfrage: „Inwieweit verbessert das Model Context Protocol (MCP) die Anbindung externer Werkzeuge an KI-Anwendungen im Vergleich zu individueller API-Integrationen?“. Die Studienarbeit ist etwa 20 Textseiten lang. Dafür habe ich die Quellenarbeit bereits beendet und meine Ergebnisse hier angehängt. Die Kapitel 1. Einführung, 2. Grundlagen, 3. Stand der Forschung, 4. Vorgehen und 5. Ausführung sind bereits fertig und hier angehängt. Es fehlen noch die Teile 6. Auswertung und 7. Fazit. 
  
Aufgabe: 
Deine Aufgabe ist es, mir den Teil Auswertung zu schreiben. Angehängt ist der bereits geschriebene Teil der Arbeit, mein Code und eine Tabelle, die ich in diesem Kapitel in die Arbeit integrieren möchte, sowie meine Recherche. Die Tabelle muss nicht beschrieben werden. Füge die Tabelle auch nicht ein. Das mache ich dann selbst. Sehr wichtig ist, dass eine kritische Betrachtung des MCP wesentlicher Bestandteil der Auswertung ist. Gehe nicht zu genau auf den Code ein, das ist bereits in Kapitel 5 passiert. 
  
Anforderungen. 
Der Schreibstil soll wissenschaftlich sein. Keine Füllwörter, keine verschachtelten Sätze und keine Stichpunkte. Es gelten HÖCHSTE Qualitätsanforderungen. Meine Zielgruppe ist ein Fachkundiges Publikum. Schreibe nicht mit allzu vielen Unterüberschriften (ein paar sind erwünscht). Verweise außerdem nicht direkt auf andere Kapitel oder beschreibe, was du im Folgenden machst. Es dürfen keine Fakten genannt werden, die nicht in den dir zur Verfügung stehenden Quellen stehen. Jede Aussage MUSS durch eine Quelle belegt sein. Nimm dafür AUSSCHLIEßLICH die Infos aus meinem Quellendokument, welches ich angehängt habe. Setze in diesem Kapitel das Augenmerk auf die Auswertung des Experiments. Erkenntnisse/Fakten, die durch die Implementierung gewonnen wurden, müssen nicht zitiert werden. Nur neue Fakten, die angebracht sind (falls es in diesem Kapitel überhaupt angebracht ist).

Zitierstil:
Beispiel: „MCP Server sind Programme, die Kontext und Operationen bereitstellen. [7]“
Die Fußzeile muss du nicht beachten, das mache ich dann. Du musst nur immer die Nummer hinter den Satz schreiben, dass ich weiß, auf welche Quelle du dich bezogen hast.



*Prompt zum Abschnitt Fazit:*

Situation: 
Ich schreibe eine Studienarbeit mit dem Titel „Kontexterweiterung von KI-Anwendungen mit dem Model Context Protocol (MCP)“. Ich behandle die Forschungsfrage: „Inwieweit verbessert das Model Context Protocol (MCP) die Anbindung externer Werkzeuge an KI-Anwendungen im Vergleich zu individueller API-Integrationen?“.
  
Aufgabe: 
Deine Aufgabe ist es, mir den Teil Fazit zu schreiben. Angehängt ist der bereits geschriebene Teil der Arbeit. Greife im Fazit keine neuen Aspekte auf, die im Hauptteil nicht behandelt wurden. Vielmehr rundet eine kritische Würdigung die Ergebnisse (Zielerreichung) in Bezug auf ihre Bedeutung für Theorie und Praxis und ein sich aus den Ausführungen ergebender Ausblick auf angrenzende, noch offene Probleme oder weiterführende Aktivitäten die Arbeit ab.
Falls in der Einleitung eine Frage aufgeworfen wurde, ist diese hier kurz und knapp zu beantworten.
  
Anforderungen. 
Der Schreibstil soll wissenschaftlich sein. Keine Füllwörter, keine verschachtelten Sätze und keine Stichpunkte. Es gelten HÖCHSTE Qualitätsanforderungen. Meine Zielgruppe ist ein Fachkundiges Publikum. Verweise nicht auf andere Kapitel oder beschreibe, was du im Folgenden machst. Verwende keine unnötig komplizierte Sprache mit zu vielen Fachwörtern.

