package com.chatpp;

import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;

public class TestSessionHandler extends StompSessionHandlerAdapter {


    @Override
    public void handleFrame(StompHeaders headers, Object payload) {
    }

    @Override
    public void handleException(StompSession session, StompCommand command, StompHeaders headers, byte[] payload, Throwable exception) {
    }

    @Override
    public void handleTransportError(StompSession session, Throwable exception) {
    }
}
