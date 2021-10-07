---
layout: accessing-url
uid: aurl
permalink: /de/tutorials/:name
title: Eine URL mit dem Browser aufrufen
description: Folgendes passiert, wenn Sie eine URL im Browser eintippen und 'Enter' drücken.

p-1: Sie geben eine URL in die Adressleiste des Browsers ein und drücken 'Enter'. Als erstes wird der Browser einem bestimmten Verfahren folgen, um die Internet Protocol-Adresse des Servers zu ermitteln, der Zugriff auf den Inhalt der Website hat, die Sie besuchen möchten. 

p-2: Bestimmt haben Sie schon von der Internet Protocol-Adresse als <b>IP-Adresse</b> gehört. Die IP-Adresse ist eine Nummer, die einen mit dem Internet verbundenen Server eindeutig identifiziert. Beim Internet wiederum, handelt es sich lediglich um ein Netzwerk von Computern, welche das Internet Protocol verwenden, um miteinander zu kommunizieren. Machen Sie sich keine Sorgen um das Internet Protocol, die Details der IP-Adressen oder das Verfahren, um diese zu erhalten. Beim Abrufen von IP-Adressen kommuniziert Ihr Browser mit verschiedenen Servern des Domain Name Systems, auch bekannt als <b>DNS</b>. Das ist im Prinzip alles, was es zu wissen gibt. 

image-1: accessing-url-1_de.png

image-2: accessing-url-2_de.png

image-3: accessing-url-3_de.png

p-3: Sobald Ihr Browser die IP-Adresse des Servers kennt, mit dem er kommunizieren muss, sendet er einen sogenannten <b>Request</b> an diesen Server. Der Browser fragt nach einer ersten <b>Response</b> vom Server, die dem Browser mitteilt, was er anzeigen soll und ob er dazu zusätzliche <b>Ressourcen</b> anfordern soll oder nicht.

p-4: Der Server hingegen prüft, welche Aktionen durchgeführt werden müssen, um den Request des Browsers zu beantworten. Möglicherweise ist die vom Browser angeforderte Ressource bereits vorbereitet und kann unmittelbar bereitgestellt werden. Oder der Request wird an das sogenannte <b>Backend</b> der Webseite übergeben, die Sie besuchen möchten. Sie müssen nicht auf die Details eines Backends eingehen. Merken Sie sich nur, dass im Backend unendlich viele verschiedene Prozesse ablaufen können, um die Response des Servers an den Browsers zu erstellen. Dies kann eine Prüfung sein, ob Sie überhaupt berechtigt sind, die Ressource anzufordern. Es kann auch beinhalten, eine oder mehrere Datenbanken abzufragen, zusätzliche Requests an andere Server zu stellen, einige Berechnungen durchzuführen usw.

p-5: Angenommen, Sie sind berechtigt, die Anfrage zu stellen und besuchen eine normale Website mit Inhalten für Menschen (im Gegensatz zu Inhalten für andere Computerprogramme), wird der Server die Anfrage wahrscheinlich mit <b>HTML</b> (Hypertext Markup Language) beantworten. Machen Sie sich vorerst keine Sorgen um die Details von HTML. Es handelt sich dabei lediglich um ein Format, um Website-Inhalte so zu strukturieren, dass Browser sie problemlos darstellen können.

p-6: Sie sollten jedoch wissen, dass diese initiale HTML-Response normalerweise zusätzliche URLs mit Ressourcen auflistet, die Ihr Browser ebenfalls anfordern muss, um die Website korrekt darzustellen. Dazu gehören <b>Bilder</b>, <b>CSS</b> (Cascading Style Sheets) mit Informationen zur Darstellung des HTML (z.B. Farben, Schriftgrössen, Abstände zwischen Absätzen usw.) und <b>JavaScript</b>-Code mit Anweisungen zur Interaktion mit der Website (was passiert beim Klick auf einen Button usw.). Ihr Browser prüft also diese HTML-Response, sucht nach URLs zusätzlicher Ressourcen und bezieht diese auf die gleiche Weise wie die initiale HTML-Response. Diese zusätzlichen Ressourcen befinden sich übrigens nicht zwingenderweise an derselben IP-Adresse wie die Website, die sie aufrufen. 

image-4: accessing-url-4_de.png

image-5: accessing-url-5_de.png

image-6: accessing-url-6_de.png

p-7: Inzwischen hat Ihr Browser alle erforderlichen Requests durchgeführt und hoffentlich alle erforderlichen Ressourcen erhalten, um die Website korrekt darzustellen. Alle diese Ressourcen befinden sich jetzt auf Ihrem Computer und bilden das <b>Frontend</b> der Website.

image-7: accessing-url-7_de.png

h-3: Randnotiz

p-8: Dieses Tutorial ist motiviert durch ein Missverständnis, das mir im Zusammenhang mit Websites manchmal begegnet. Wenn Sie im Browser eine URL eingeben und 'Enter' tippen, dann ist es <b>nicht</b> so, dass Sie einen Server besuchen und sich die Website ankucken, wie sie auf diesem Server läuft. Ihr Browser holt sich lediglich die benötigten Informationen vom Server, speichert diese auf Ihrem Computer und zeigt Ihnen alles an.

p-9: Jetzt können Sie sagen&#58; <i>"Moment mal, unser Unternehmen verwendet Google Analytics und dort kann ich genau sehen, wie viele Leute sich gerade auf unserer Website befinden und wie sie damit interagieren! Die Leute sind eindeutig aktiv <b>auf</b> unserer Website."</i>

p-10: Wenn Ihre Website Google Analytics verwendet, fordern die Browser Ihrer Website-Besucher beim Zugriff auf Ihre Website einen von Google bereitgestellten Javascript-Code an (als Teil der zusätzlichen Ressourcen, die für die Website benötigt werden). Dieser Code ist eigentlich ein Computerprogramm, das von den Browsern Ihrer Website-Besucher ausgeführt wird. Es teilt den Browsern jeweils mit, was bei einem Klick auf die Website zu tun ist. Jedes Mal, wenn jemand einen Klick ausführt, weist das Programm den Browser an, einige Informationen an die Google Analytics-Server zu senden. Dies können Informationen darüber sein, was sie angeklickt haben, wie weit sie auf der Seite nach unten gescrollt haben, welche Art von Browser sie verwenden usw. Ihr Google Analytics-Dashboard fordert andererseits ständig seine eigenen Server an, um Ihnen die neuesten Daten anzuzeigen, die von den Browsern Ihrer Website-Besucher empfangen wurden. Solange Ihre Website-Besucher mit der Website interagieren, die sie von Ihrem Server angefordert haben, senden deren Browser auch Daten an die Server von Google Analytics. Daher teilt Ihnen Google Analytics mit, dass sich gerade jemand auf Ihrer Website befindet. Es sind jedoch Programme, die von den Browsern Ihrer Website-Besucher ausgeführt werden und Informationen an die Google-Server senden.
---