---
description: "Practical checks for common problems."
icon: screwdriver-wrench
---

# Troubleshooting

## Plugin will not start

Confirm you installed the correct edition and only one MRK Doctor JAR. Check the server's Java requirements, free disk space, file permissions, and the first relevant console error. Restart normally after correcting the issue.

## Server is lagging or shows errors

Record when the issue began. Check `/doctor status`, open incidents, and recent changes. Review the affected plugin's console errors, then [create a report](../reports/creating-reports.md). Test one reversible change at a time using a backup.

## Dashboard will not connect

Confirm MRK Doctor is enabled and open the configured embedded dashboard address. Check the bind address, single hosting allocation, firewall, proxy route, and configured port. A newly generated token is active immediately. Never disable security or expose an unrestricted port as a workaround.

## A player cannot use a command

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

## Memory keeps increasing

Observe usage over time and compare it with player activity. One high reading is not proof of a leak or plugin ownership. Use your server's supported profiling tools when more detail is needed.

## Reports or history are unavailable

Check free disk space and read/write permissions for `plugins/MRKDoctor/`. Stop the server and back up the complete folder before attempting repairs. Do not delete data files to troubleshoot a problem without a verified backup.

## Monitoring overhead seems high

Return monitoring intervals to their defaults, avoid tracking unnecessarily large text files, and compare performance under similar load. If it persists, send relevant logs and settings through [support](../../support.md), without credentials.
