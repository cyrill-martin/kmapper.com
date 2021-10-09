---
layout: html-css-javascript
uid: hcj
title: HTML, CSS, JavaScript - Die Frontend-Bausteine
description: Eine Übersicht darüber, wie die Frontend-Bausteine HTML, CSS und JavaScript funktionieren und zusammenspielen.
permalink: /:collection/tutorials/:name/

p-1: HTML (Hypertext Markup Language) wird verwendet, um Website-Inhalte so zu strukturieren, dass Browser sie in einer für Menschen einfach lesbaren Form anzeigen können. Denken Sie an eine große Anzahl verschiedener Leuchtstifte und Richtlinien mit Anweisungen zur Markierung von Text. Z.B. <i>"Der Haupttitel eines Dokuments sollte gelb markiert werden. Alle Untertitel sollten grün markiert werden. Verwenden Sie Orange für alle weiteren Titel. Verwenden Sie Blau, um alle Absätze zu markieren. Verwenden Sie in allen Titeln und Absätzen Rot, um die Buchstaben zu markieren, die <b>fett</b> dargestellt werden sollen."</i>

image-1: html-css-javascript-1_de.png

p-2: Anstelle von Leuchtstiften werden im Zusammenhang mit HTML sogenannte <b>HTML-Tags</b> verwendet. Ein HTML-Tag hat einen Namen (anstelle einer Farbe), um anzuzeigen, was markiert wird. Es gibt einen <b>Start-Tag</b> und ein <b>End-Tag</b>, um anzuzeigen, wo die Markierung beginnt und endet. Es gibt auch eine Richtlinie, welche Tags für welche Teile eines Textes zu verwenden sind. So sollte der Titel eines Textes mit einem <b>h1</b>-Tag (h1 für Heading 1 bzw. Überschrift 1) markiert werden. Alle Untertitel sollten mit <b>h2</b>-Tags markiert werden. Weitere Untertitel werden mit Hilfe von <b>h3</b>-Tags usw. markiert. Für Absätze werden <b>p</b>-Tags (p für paragraph) und für Buchstaben, die fett sein sollten, <b>b</b>-Tags (b für bold) verwendet. Natürlich existieren noch viele weitere Tags (wie z.B. <i>i</i> für italic bzw. kursiv wie im Bild unten).

image-2: html-css-javascript-2_de.png

p-3: Bei der Darstellung von HTML stellen Browser sicher, dass keine der eigentlichen Tags angezeigt werden. Allerdings verwenden sie für bestimmte Tags standardmässig bestimmte Darstellungsformen. Für Buchstaben innerhalb eines h1-Tags verwenden Browser z.B. eine grössere Schriftart. Bei Absätzen (p-Tag) fügen sie vor und nach dem markierten Text einen gewissen Abstand hinzu. Allerdings möchten Web-Entwickler möglicherweise nicht, dass die Browser diese Standarddarstellungen anwenden. Vielleicht möchten, dass andere Abstände zwischen den Absätzen und andere Schriftgrössen für Titel angewendet werden.

image-3: html-css-javascript-6_de.png

p-4: Solche vom Standard abweichende Darstellungen werden durch die Verwendung von <b>CSS</b> (Cascading Style Sheets) erreicht.

p-5: CSS ist in der Regel Teil der zusätzlichen Ressourcen, die Ihr Browser anfordert, wenn Sie eine URL aufrufen. Die initiale HTML-Response listet also wahrscheinlich mindestens eine CSS-Ressource auf, welche spezielle Ansprüche an die Darstellung des HTML stellt. In seiner einfachsten Form können Sie dank CSS die Namen der HTML-Tags und entsprechend benutzerdefinierte Darstellungen aufschreiben. CSS hat viel, viel mehr zu bieten als diesen einfachen Ansatz, aber dies sollte ausreichen, um die Idee zu verstehen. Denken Sie lediglich daran, dass jedes CSS eng an eine HTML-Response gebunden ist. CSS, das im Kontext der einen Response angefordert wird, hat keine Auswirkungen auf die Darstellung einer anderen Response. Es sei denn, in beiden Fällen wird auf das exakt gleiche CSS verwiesen.

p-6: Beim Aufrufen der URL dieses Tutorials wurde in der HTML-Response auch CSS als eine der zusätzlichen Ressourcen aufgeführt, die von Ihrem Browser angefordert werden müssen. Das CSS weist Ihren Browser an, seine Standardstile zu überschreiben, indem er eine andere Schriftart anwendet, ein sehr dunkles Graublau als Textfarbe sowie verschiedene Schriftgrößen für Titel verwendet und unterschiedliche Zeilenhöhen für Titel und Absätze anwendet. Machen Sie sich keine Gedanken über die inneren Details von CSS. Beachten Sie jedoch, dass jedes CSS Hand in Hand geht mit einer entsprechenden HTML-Response.

p-7: Auf den meisten Websites treffen Sie auf eine gewisse User Experience in Form von Interaktionen. Möglicherweise klicken Sie auf einen Button und einige zusätzliche Elemente erscheinen auf der Website. Vielleicht werden Sie benachrichtigt, dass Sie vergessen haben einen Strassennamen anzugeben, wenn Sie versuchen etwas online zu bestellen. Solche Veränderungen der Website erfolgen in der Regel ohne ein Neuladen der Website bzw. ohne Requests von neuem HTML und CSS - es sind einfach nur Teile der bestehenden Website, die sich verändern. Diese User Experience wird durch die Verwendung von <b>JavaScript</b> ermöglicht.

p-8: JavaScript ist eine normale Programmiersprache mit eigener Syntax und eigenen Methoden zum Schreiben von Anweisungen, die ein Computer ausführen kann. Die gängigen Browser verfügen über eine sogenannte <b>JavaScript-Engine</b>, um JavaScript-Code auszuführen. Denken Sie daran, dass JavaScript zu den zusätzlichen Ressourcen gehört, die Ihr Browser beim Zugriff auf eine URL möglicherweise anfordert. JavaScript-Entwickler schreiben also Code, der in Ihrem Browser ausgeführt werden soll. Möglicherweise sind Sie auf den Begriff von <b>client-side</b> Code oder clientseitiger Programmierung gestossen, der genau das beschreibt&#58; Bereitstellen oder Schreiben von Programmiercode, der in den Browsern (den Clients) der Website-Besucher ausgeführt werden soll. Dies steht im Gegensatz zu <b>server-side</b> Code oder serverseitiger Programmierung, bei der es darum geht, Code zu programmieren, der im Backend, auf dem Server, einer Website ausgeführt wird.

p-9: Die JavaScript-Engines in Browsern sind extrem nützliche Umgebungen. Sie ermöglichen JavaScript-Entwicklern, Anweisungen für Ihren Browser zu schreiben, z.B. zusätzliche Anfragen an einige Server auszuführen, Auf Klicks auf der aktuellen Website zu "hören" und mit der Ausführung von dazugehörigem Code darauf zu reagieren oder Daten in Ihrem Browser speichern und auch Daten aus diesem lesen.

p-10: Klicken Sie auf einen der Buttons unten, um clientseitigen Javascript-Code in Ihrem Browser auszuführen.

change-button: Diese Website verändern

info-button: Informationen anzeigen

p-11: Beim Aufrufen der URL dieses Tutorials wurde in der HTML-Response auch JavaScript-Code als eine der zusätzlichen Ressourcen aufgeführt, die von Ihrem Browser angefordert werden müssen. Der Code weist Ihren Browser an, auf Klicks auf einen der beiden obigen Buttons mit der Ausführung von dazugehörigem Code zu reagieren. Sie müssen sich nicht mit den Details von JavaScript beschäftigen, aber ich hoffe, Sie haben jetzt eine Vorstellung von clientseitigem JavaScript-Code und seiner wichtigen Rolle in der User Experience. 

image-4: html-css-javascript-9_de.png
---