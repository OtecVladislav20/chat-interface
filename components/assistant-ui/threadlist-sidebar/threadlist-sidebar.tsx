import * as React from "react";
import { Github, MessagesSquare } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import styles from "./threadlist-sidebar.module.scss";

export function ThreadListSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className={styles.header}>
        <div className={styles.headerContent}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link
                  href="https://assistant-ui.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.headerIconWrapper}>
                    <MessagesSquare size={16} />
                  </div>
                  <div className={styles.headerHeading}>
                    <span className={styles.headerTitle}>assistant-ui</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarHeader>

      <SidebarContent className={styles.content}>
        <ThreadList />
      </SidebarContent>

      <SidebarRail />

      <SidebarFooter className={styles.footer}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link
                href="https://github.com/assistant-ui/assistant-ui"
                target="_blank"
              >
                <div className={styles.footerIconWrapper}>
                  <Github size={16} />
                </div>
                <div className={styles.footerHeading}>
                  <span className={styles.footerTitle}>GitHub</span>
                  <span>View Source</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
